var dashModel = require("../models/dashModel");

function adicionarTreino(req, res) {
    // var dataTreino = req.body.dataTreinoServer;
    var diaTreino = req.body.diaTreinoServer;
    var horaTreino = req.body.horaTreinoServer;
    var fkUsuarioTreino = req.body.fkUsuarioTreinoServer;

    // if (dataTreino == undefined) {
    //     res.status(400).send("Data do treino vazia");
    // }
    if (diaTreino == undefined) {
        res.status(400).send("Dia do treino vazio");
    } 
    if (horaTreino == undefined) {
        res.status(400).send("Hora do treino vazio!");
    }
    if (fkUsuarioTreino == undefined) {
        res.status(400).send("fkUsuarioTreino vazia!");
    } else {
        dashModel.adicionarTreino(diaTreino, horaTreino, fkUsuarioTreino).then(function(resposta){
            res.status(200).send("Treino inserido com sucesso!");
        }).catch(function(erro){
            res.status(500).json({erro: "Uau! Karateca está treinando bastante, nem o site acompanha esse mawashi. Tente novamente mais tarde."});
        });
    }

}

function adicionarMelhorias(req, res) {
    var dificuldade = req.body.dificuldadeServer;
    var nivelDifi = req.body.nivelDifiServer;
    var facilidade = req.body.facilidadeServer;
    var nivelFaci = req.body.nivelFaciServer;
    var fkUsuarioMel = req.body.fkUsuarioMelServer;

    if (dificuldade == undefined) {
        res.status(400).send("Dificuldade vazia");
    }
    if (nivelDifi == undefined) {
        res.status(400).send("Nível de dificuldade vazio");
    } 
    if (facilidade == undefined) {
        res.status(400).send("Facilidade vazia!");
    }
    if (nivelFaci == undefined) {
        res.status(400).send("Nível de facilidade vazia!");
    } if (fkUsuarioMel == undefined) {
        res.status(400).send("Nível de facilidade vazia!");
    }else {
        dashModel.adicionarMelhorias(dificuldade, nivelDifi, facilidade, nivelFaci, fkUsuarioMel).then(function(resposta){
            res.status(200).send("Melhorias inseridas com sucesso!");
        }).catch(function(erro){
            res.status(500).json({erro: "Uau! Karateca está treinando bastante, nem o site acompanha esse mawashi. Tente novamente mais tarde."});
        });
    }

}

function atualizarDados(req, res) {
    var nomeAsso = req.body.nomeAssoServer;
    var faixa = req.body.faixaServer;
    var nomeSensei = req.body.nomeSenseiServer;
    var medalhas = req.body.medalhasServer;
    var fkUsuarioDados = req.body.fkUsuarioDadosServer;


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
    if (fkUsuarioDados == undefined) {
        res.status(400).send("As medalhas estão undefineds!");
    }

    dashModel.atualizarDados(nomeAsso, faixa, nomeSensei, medalhas, fkUsuarioDados).then(function(resposta){
        res.status(200).send("dados inseridos com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarDados(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`estou na funcao listar dados do controller`);
    dashModel.listarDados(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os dados do usuário: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarQtdTreinos(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`estou na funcao listar qtd treinos do controller`);
    dashModel.listarQtdTreinos(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar a quantidade de treinos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarDia(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.buscarDia(idUsuario)
        .then(
            function (resultado) {                
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os a quantidade de treinos",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
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

function listarMelhorias(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`estou na funcao listar melhorias do controller`);
    dashModel.listarMelhorias(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar as melhorias: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    adicionarTreino,
    atualizarDados,
    listarQtdTreinos,
    buscarDia,
    obterUltimosTreinos,
    adicionarMelhorias,
    listarMelhorias,
    listarDados
    // continuar
}