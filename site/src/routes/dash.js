var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/addKata", function (req, res) {
    // função a ser chamada quando acessar /dash/addKata
    dashController.addKata(req, res);
});

router.post("/atualizarDados", function (req, res) {
    // função a ser chamada quando acessar /dash/atualizarDados
    dashController.atualizarDados(req, res);
});

module.exports = router;
