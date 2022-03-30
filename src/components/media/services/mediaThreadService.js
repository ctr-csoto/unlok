let ffmpeg = require("ffmpeg");
let path = require("path");
const fs = require("fs")
const { workerData, parentPort } = require("worker_threads");

(async () =>{
    try {
        let video = await new ffmpeg(workerData.file);
        await video.setVideoSize('640x?', true, true, '#000');
        await video.addFilterComplex([
          {
              filter: 'drawtext',
              options: {
                  fontsize: 15,
                  timecode: '00\:00\:00\:00',  //<--- Issue is most likely here
                  fontsize: 32,
                  fontcolor: 'white',
                  boxcolor: 'black',
                  box: 1
              }
          }
        ]);
        // await video.addFilterComplex([
        //   "[in]drawtext=text='Testing AM':",
        //   "fontcolor=white: borderw=2: fontfile=Arial Black: fontsize=w*0.04:",
        //   "x=(w-text_w)-(w*0.04): y=(h-text_h)-(w*0.04): enable='between(t,0,6)',",
        //   "drawtext=text='Testing AM': fontcolor=white: borderw=2:",
        //   "fontfile=Arial Black: fontsize=w*0.04: x=(w-text_w)/2: y=(h-text_h)/2:",
        //   "enable='between(t,7,10)'[out]"
        // ])

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