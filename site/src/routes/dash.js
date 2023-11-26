var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

// ADICIONANDO UM NOVO TREINO
router.post("/adicionarTreino", function (req, res) {
    // função a ser chamada quando acessar /dash/adicionarTreino
    dashController.adicionarTreino(req, res);
});

//  ADICIONANDO DADOS (ASSOCIAÇÃO, SENSEI, FAIXA, MEDALHAS)
router.post("/atualizarDados", function (req, res) {
    // função a ser chamada quando acessar /dash/atualizarDados
    dashController.atualizarDados(req, res);
});

// PEGANDO OS DADOS DOS ÚLTIMOS TREINOS
router.get("/ultimos", function (req, res) {
    dashController.obterUltimosTreinos(req, res);
});

// MUDANDO OS DADOS PEGOS ACIMA, NO PERFIL
router.get("/mudarDados", function (req, res) {
    dashController.mudarDados(req, res);
});

// LISTANDO OS TREINOS DO USUÁRIO
router.get("/listarQtdTreinos/:idUsuario", function (req, res) {
    dashController.listarQtdTreinos(req, res);
});

router.get("/buscarDia/:idUsuario", function (req, res) {
    dashController.buscarDia(req, res);
});

module.exports = router;