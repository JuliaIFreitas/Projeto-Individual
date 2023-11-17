var express = require("express");
var router = express.Router();

var karateController = require("../controllers/karateController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /karate/cadastrar
    karateController.cadastrar(req, res);
});

// router.post("/autenticar", function (req, res) {
//     // função a ser chamada quando acessar /karate/autenticar
//     karateController.autenticar(req, res);
// });

// router.get("/listar", function (req, res) {
//     função a ser chamada quando acessar /carros/listar
//     carroController.listar(req, res);
// });

module.exports = router;