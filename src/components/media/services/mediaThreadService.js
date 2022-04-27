let ffmpeg = require("ffmpeg");
let path = require("path");
const fs = require("fs")
const { workerData, parentPort } = require("worker_threads")
console.log("workerData --> ",workerData);
let dest = "/dest/video.mp4";
(async () =>{
    try {
        let video = await new ffmpeg(workerData.file);
        // await video.setVideoSize('640x?', true, true, '#000').addCommand('-f', 'mov');     
        let video2 = await video.addCommand( '-f', `scale=320:240`);
        // await video.addCommand(`-vf', "drawtext=text='${workerData.url_user}':x=10:y=H-th-10:fontsize=20:fontcolor=white:shadowcolor=black:shadowx=2:shadowy=2`);
        console.log("818922823", video2, "0009999009");
        console.log(video.metadata);

          var newFilepath = path.resolve(__dirname, "videostemp", workerData.filename);

          var settings = {
              position: "C", // Position: NE NC NW SE SC SW C CE CW
              margin_nord: null, // Margin nord
              margin_sud: null, // Margin sud
              margin_east: null, // Margin east
              margin_west: null // Margin west
          }
          
          let processingVideo = await video.fnAddWatermark(workerData.watermark_image_url, newFilepath, settings);
          parentPort.postMessage({ status: "Done", file: processingVideo });
      } catch (e) {
        console.log("ERRROR")
        console.log(e)
        console.log(e.msg)
        parentPort.postMessage({ status: "Error", file: JSON.stringify(e) });
      }
})();