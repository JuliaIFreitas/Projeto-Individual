var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");

router.get("/ultimas/:idUsuario", function (req, res) {
    treinoController.buscarUltimosTreinos(req, res);
});

router.get("/tempo-real/:idTreino", function (req, res) {
    treinoController.buscarTreinosEmTempoReal(req, res);
})

// rota para obter os ultimos 4 diários
router.get("/ultimos", function (req, res) {
    treinoController.obterUltimosTreinos (req, res); 
    });

module.exports = router;