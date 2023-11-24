var database = require("../database/config")

// function continuar(nomeKata) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function continuar():", nomeKata);
//     var instrucao = `
//         INSERT INTO kata (nomeKata) VALUES ('${nomeKata}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function addKata(nomeKata, qtdMovimentos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function addKata():", nomeKata, qtdMovimentos);
    var instrucao = `
        INSERT INTO kata (nomeKata, qtdMovimentos) VALUES ('${nomeKata}', '${qtdMovimentos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarDados(nomeAsso, faixa, nomeSensei, medalhas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarDados():", nomeAsso, faixa, nomeSensei, medalhas);
    var instrucao = `
        INSERT INTO dados (nomeAsso, faixa, nomeSensei, medalhas) VALUES ('${nomeAsso}', '${faixa}', '${nomeSensei}', '${medalhas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    addKata,
    atualizarDados,
    // continuar
};