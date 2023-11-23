var dashModel = require("../models/dashModel");

function addKata(req, res) {
    // var nomeKata = req.body.nomeKataServer;
    var qtdMovimentos = req.body.qtdMovimentosServer;

    // if (nomeKata == undefined) {
    //     res.status(400).send("O nome do kata está undefined");
    // } 
    if (qtdMovimentos == undefined) {
        res.status(400).send("A quantidade de movimentos está undefined!");
    }

    dashModel.addKata(qtdMovimentos).then(function(resposta){
        res.status(200).send("dados inseridos com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function atualizarDados(req, res) {
    var nomeAsso = req.body.nomeAssoServer;
    var faixa = req.body.faixaServer;
    var nomeSensei = req.body.nomeSenseiServer;
    var medalhas = req.body.medalhasServer;

    if (nomeAsso == undefined) {
        res.status(400).send("O nome da associação está undefined");
    } 
    if (faixa == undefined) {
        res.status(400).send("A faixa está undefined!");
    }
    if (nomeSensei == undefined) {
        res.status(400).send("O nome do Sensei está undefined!");
    }
    if (medalhas == undefined) {
        res.status(400).send("As medalhas estão undefineds!");
    }

    dashModel.atualizarDados(nomeAsso, faixa, nomeSensei, medalhas).then(function(resposta){
        res.status(200).send("dados inseridos com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    addKata,
    atualizarDados
}