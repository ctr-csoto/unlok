const { Router } = require("express");
const router = Router();
const operacionController = require("./controllers/operacionesController");

module.exports = function mediaApi(app) {
    app.use("/operacion", router);
    router.get('/:operacion',operacionController.resolver);
    router.get('/',operacionController.getAll);
};
