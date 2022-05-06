let ffmpeg = require("fluent-ffmpeg");
let path = require("path");
const fs = require("fs");
const { workerData, parentPort } = require("worker_threads");

(async () => {
  try {
    ffmpeg(workerData.file)
      .withOutputFormat(workerData.output_to)
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
