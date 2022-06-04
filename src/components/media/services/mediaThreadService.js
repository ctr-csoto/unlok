const ffmpegPath  = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
      ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require("fs");
const { workerData, parentPort } = require("worker_threads");

(async () => {
  try {
    await ffmpeg(workerData.file)
      .withOutputFormat(workerData.output_to)
      .input(workerData.watermark_image_url)
      .videoCodec("libx264")
      .outputOptions("-pix_fmt yuv420p")
      .complexFilter(["[0:v]scale=640:-1[bg];[bg][1:v]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
      .on("end", function (stdout, stderr) {
        let newPath = workerData.destination + "/" + workerData.filenewname;
        parentPort.postMessage({
          status: "Done",
          file: {
            name: workerData.filenewname,
            path: newPath,
          },
        });
      })
      .on("error", function (err) {
        console.log("An error happened: " + err.message, workerData.filename);
        if (fs.existsSync(workerData.file)) {
          fs.unlink(workerData.file, function (err) {
            if (err) throw err;
            console.log("Original file deleted");
          });
        }
      })
      .saveToFile(workerData.destination + "/" + workerData.filenewname);
  } catch (e) {
    console.log("ERRROR");
    console.log(e);
    console.log(e.msg);
    parentPort.postMessage({ status: "Error", file: JSON.stringify(e) });
  }
})();
