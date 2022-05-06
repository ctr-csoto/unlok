let ffmpeg = require("fluent-ffmpeg");
let path = require("path");
const fs = require("fs");
const { workerData, parentPort } = require("worker_threads");

(async () => {
  try {
    ffmpeg(workerData.file)
      .withOutputFormat(workerData.output_to)
      .input(workerData.watermark_image_url)
      .videoCodec("libx264")
      .outputOptions("-pix_fmt yuv420p")
      .complexFilter(["[0:v]scale=640:-1[bg];[bg][1:v]overlay=W-w-10:H-h-10"])
      .on("end", function (stdout, stderr) {
        fs.unlink(workerData.file, function (err) {
          if (err) throw err;
          console.log("Original file deleted");
        });
        let newPath = workerData.destination + "\\" + workerData.filenewname;
        parentPort.postMessage({
          status: "Done",
          file: {
            name: workerData.filenewname,
            path: newPath,
          },
        });
      })
      .on("error", function (err) {
        console.log("An error happened: " + err.message);
        fs.unlink(workerData.file, function (err) {
          if (err) throw err;
          console.log("Original file deleted");
        });
      })
      .saveToFile(workerData.destination + "/" + workerData.filenewname);
  } catch (e) {
    console.log("ERRROR");
    console.log(e);
    console.log(e.msg);
    parentPort.postMessage({ status: "Error", file: JSON.stringify(e) });
  }
})();
