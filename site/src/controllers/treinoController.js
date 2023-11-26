var treinoModel = require("../models/treinoModel");

function buscarUltimosTreinos(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando os ultimos ${limite_linhas} treinos`);

    treinoModel.buscarUltimosTreinos(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos treinos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarTreinosEmTempoReal(req, res) {

    var idTreino = req.params.idTreino;

    console.log(`Recuperando treinos em tempo real`);

    treinoModel.buscarTreinosEmTempoReal(idTreino).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos treinos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterUltimosTreinos(req, res) {
    treinoModel.obterUltimosTreinos()
        .then(function (ultimosTreinos) {
            res.status(200).json(ultimosTreinos);
        })
        .catch(function (erro) {
            res.status(500).json({ erro: "Poxa! Seu may gheri foi muito forte, aguarde um pouco, karateca!" });
        });
}

module.exports = {
    buscarUltimosTreinos,
    buscarTreinosEmTempoReal,
    obterUltimosTreinos
}