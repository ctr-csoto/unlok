let fs = require("fs");
let ffmpeg = require("fluent-ffmpeg");
const S3Uploads = require("../../../utils/S3/s3Uploads");
let path = require("path");
let Jimp = require("jimp");
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
const WIDTH_IMG = 500;
class Media {
  async uploadResource(user, files) {
    let upload_arr = [];
    let _url_user = `Unlok.me/${user.username}`;
    for (const file of files) {
      try {
        if (file.mimetype.split("/")[0] == "video") {
          upload_arr.push(this.threadsWaterMaker(user, file, _url_user));
        } else {
          const image = await Jimp.read(file.path);
          let size_w_img = image.getWidth();
          let size_h_img = image.getHeight();
          // Add the unlok logo
          if (user.type == "unlokplus") {
            let { logo, pos_X, pos_Y } = await this.formatLogoWatermaker(
              size_w_img,
              size_h_img
            );
            image.composite(logo, pos_X, pos_Y, {
              mode: Jimp.BLEND_LIGHTEN,
              opacitySource: 1,
              opacityDest: 1,
            });
          }

          // Resize image
          if (size_w_img > WIDTH_IMG) {
            image.resize(WIDTH_IMG, Jimp.AUTO);
          }

          size_w_img = image.getWidth();
          size_h_img = image.getHeight();
          let font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
          image.print(
            font,
            size_w_img - Jimp.measureText(font, _url_user) - 8,
            size_h_img - 22,
            _url_user
          );

          let mi_buffer = await image.getBufferAsync(Jimp.AUTO);
          upload_arr.push(
            this.uploadToS3Buffer(
              user.id,
              user.type,
              file.originalname,
              mi_buffer
            )
          );

          // Delete all temp images
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
          }
        }
      } catch (error) {
        console.log("errorrr", error);
      }
    }
    let res = await Promise.all(upload_arr);
    return res;
  }

  async uploadToS3(modelId, type = "profile", path, media) {
    let localPath = `${path}/${media.fileName}`;
    let s3Path = `${this.buildUploadsFolder(modelId, type)}/${media.fileName}`;
    let asdsad = await S3Uploads.uploadAWS(s3Path, localPath);
    return asdsad;
  }

  async uploadToS3Buffer(
    modelId,
    type = "profile",
    fileName,
    img,
    original = false,
    buffer = true
  ) {
    let s3Path = `${this.buildUploadsFolder(modelId, type)}/${
      original ? "original_" : ""
    }${new Date().getTime()}_${fileName}`;
    let res = await S3Uploads.uploadAWS(s3Path, img, buffer);
    return res;
  }

  buildUploadsFolder(modelId, subFolder) {
    return `model_${modelId}/${subFolder}`;
  }

  async formatLogoWatermaker(size_w, size_h, get_path = false) {
    try {
      const logo = await Jimp.read(
        path.resolve(
          __dirname,
          "../",
          "../",
          "../",
          "resources",
          "images",
          "unlok_50_red.png"
        )
      );
      let percent = 100;
      let logo_h = 50;
      if (size_w < WIDTH_IMG) {
        percent = (size_w * 100) / WIDTH_IMG;
        logo_h = (logo_h * percent) / 100;
      }
      await logo.resize(Jimp.AUTO, logo_h, Jimp.RESIZE_BEZIER);
      let pos_Y = (size_h - logo.getHeight()) / 2;
      let pos_X = (size_w - logo.getWidth()) / 2;
      let url_img = "";
      if (get_path) {
        url_img = `${new Date().getTime()}_${Math.floor(
          Math.random() * 100
        )}_prueba_img.png`;
        logo.write(url_img);
      }
      return { logo, pos_X, pos_Y, url_img };
    } catch (error) {
      console.log(error);
    }
  }

  removeExtension(filename) {
    return filename.substring(0, filename.lastIndexOf(".")) || filename;
  }

  async threadsWaterMaker(user, file, url_user) {
    try {
      if (file.mimetype.split("/")[0] == "video") {
        if (isMainThread) {
          let url_img_fixed = path.resolve(
            __dirname,
            "../",
            "../",
            "../",
            "resources",
            "images",
            "unlok_50.png"
          );
          console.log(file);

          let thread = new Worker(
            path.resolve(__dirname, "./mediaThreadService.js"),
            {
              workerData: {
                file: file.path,
                filename: file.originalname,
                watermark_image_url: url_img_fixed,
                output_to: "mp4",
                filenewname: `${this.removeExtension(file.filename)}.mp4`,
                destination: file.destination,
                url_user,
              },
            }
          );
          thread.on("message", async (data) => {
            console.log("---> ", data.status);
               
            let videoS3 = await this.uploadToS3Buffer(
              user.id,
              user.type,
              data.file.name,
              data.file.path,
              true,
              false
            );
            //console.log(videoS3);
            // Delete processing temporary file
            if (fs.existsSync(data.file.path)) {
              fs.unlinkSync(data.file.path);
            }
            return videoS3;
          });
          thread.on("error", (err) => {
            console.error("thread", err);
          });
          thread.on("exit", (code) => {
            if (code != 0)
              console.error(`Worker stopped with exit code ${code}`);
          });
        }
      }
    } catch (error) {
      console.log("errorrr", error);
      return JSON.stringify(error);
    }
  }
}

module.exports = new Media();
