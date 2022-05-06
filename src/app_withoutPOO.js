const express = require('express');
const path = require("path");
const corsHandler = require('./utils/middleware/corsHandler');
const serveRoutes = require('./routes');
const morgan = require("morgan");
const ffmpeg = require("fluent-ffmpeg");
const mime = require('mime-types');

let app = express();
let port = process.env.PORT || 3000;
let host = process.env.HOST || 'localhost';

ffmpeg.setFfmpegPath(process.env.FFMPEG_PATH);
ffmpeg.setFfprobePath(process.env.FFPROBE_PATH);
//ffmpeg.setFlvtoolPath("C:/flvtool");

/*ffmpeg.getAvailableFormats(function(err, formats) {
    Object.keys(formats).map(function(ext) {
      return Object.assign(formats[ext], {
        mime: mime.lookup(ext),
        ext
      });
    }).forEach(function(format) {
      const video = format.mime && format.mime.includes('video');
      if (video) {
        console.log('video', format);
      }
    });
});*/

console.log(ffmpeg);

app.use(corsHandler("*"));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views', 'ejs'));
app.set('view engine', 'ejs');


serveRoutes(app);

app.listen(port, err=>{
    console.log(`Server On http://${host}:${port}  ||  Worker ${process.pid} - FH: ${new Date()}`)
})