// var database = require("../database/config");

// function obterUltimosTreinos() {
//     console.log("ACESSEI O OBTER ULTIMOS TREINOS \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterUltimosDiarios()");

//     var instrucao = `
//     SELECT idTreino, diaTreino, horaTreino
//     FROM treinos
//     ORDER BY idTreino DESC; `;

//     console.log("Executando a instrução SQL: \n" + instrucao);

//     return database.executar(instrucao);
// }

// function buscarUltimosTreinos(idUsuario, limite_linhas) {

//        var instrucao = `select 
//         diaTreino as Dia, 
//         horaTreino as Hora,
//                     from treinos
//                     where fkUsuarioTreino = ${idUsuario}
//                     order by id desc limit ${limite_linhas}`;

//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

//     console.log("Executando a instrução SQL: \n" + instrucao);

//     return database.executar(instrucao);
// }

// function buscarTreinosEmTempoReal(idUsuario) {

//     instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top 1
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     CONVERT(varchar, momento, 108) as momento_grafico, 
    //                     fk_aquario 
    //                     from medida where fk_aquario = ${idAquario} 
    //                 order by id desc`;

    // } else 
//     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 

// horaTreino varchar(8),
// fkUsuarioTreino int,

//         diaTreino as Dia, 
//         horaTreino as Hora,
//                         fkUsuarioTreino 
//                         from treinos where fkUsuarioTreino = ${idUsuario} 
//                     order by id desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


// module.exports = {
//     buscarUltimosTreinos,
//     buscarTreinosEmTempoReal,
//     obterUltimosTreinos
// }
