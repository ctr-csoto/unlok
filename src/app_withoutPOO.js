const express = require('express');
const path = require("path");
const corsHandler = require('./utils/middleware/corsHandler');
const serveRoutes = require('./routes');
const morgan = require("morgan");

let app = express();
let port = process.env.PORT || 3000;
let host = process.env.HOST || 'localhost';

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