var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/adicionarTreino", function (req, res) {
    // função a ser chamada quando acessar /dash/adicionarTreino
    dashController.adicionarTreino(req, res);
});

router.post("/atualizarDados", function (req, res) {
    // função a ser chamada quando acessar /dash/atualizarDados
    dashController.atualizarDados(req, res);
});

// router.post("/continuar", function (req, res) {
//     função a ser chamada quando acessar /dash/continuar
//     dashController.continuar(req, res);
// });

module.exports = router;
