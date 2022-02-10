const express = require('express');
const cors = require('cors');
const serveRoutes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || 'localhost';
        this.settings();
        this.middleware();
        this.routes();
    }

    
    settings() {
        this.app.use(cors('*'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static('public'));
    }

    views() {
        this.app.set('views', path.join(__dirname, 'views', 'ejs'));
        this.app.set('view engine', 'ejs');
    }
         
   

    middleware() {
        this.app.use(cors('*'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static('public'));
    }
    
    routes() {
        serveRoutes(this.app);
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://${this.host}:${this.port}`);
        });
    }
}

module.exports = Server;