const express = require('express');
let cluster = require("cluster");
let numCPUs = require("os").cpus().length;
const corsHandler = require('./utils/middleware/corsHandler');
const {
    logErrors,
    wrapErrors,
    errorHandler
  } = require('./utils/middleware/errorHandlers');
  const notFoundHandler = require('./utils/middleware/notFoundHandler');
const serveRoutes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || 'localhost';
        this.settings();
        this.middleware();
        this.routes();
        this.error_middleware();
    }

    
    settings() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static('public'));
    }

    views() {
        this.app.set('views', path.join(__dirname, 'views', 'ejs'));
        this.app.set('view engine', 'ejs');
    }
         
   

    middleware() {
        this.app.use(corsHandler());
    }
    
    routes() {
        serveRoutes(this.app);
    }

    error_middleware() {

        // Catch 404
        this.app.use(notFoundHandler);

        // Errors controllers
        this.app.use(logErrors);
        this.app.use(wrapErrors);
        this.app.use(errorHandler);
    }
    
    listen() {
        if(cluster.isMaster){

            // WORKERS
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();        
            }
        
            cluster.on("exit", (worker, code, signal)=>{
                console.log(`Worker dead ${worker.process.pid}`)
                cluster.fork(); 
            })
        }else{
            this.app.listen(this.port, err=>{
                console.log(`Server On http://${this.host}:${this.port}  ||  Worker ${process.pid} - FH: ${new Date()}`)
            })
        }
    }
}

module.exports = Server;
