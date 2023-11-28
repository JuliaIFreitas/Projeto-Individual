var database = require("../database/config")

// function continuar(nomeKata) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function continuar():", nomeKata);
//     var instrucao = `
//         INSERT INTO kata (nomeKata) VALUES ('${nomeKata}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function adicionarTreino(diaTreino, horaTreino, fkUsuarioTreino) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function adicionarTreino():", diaTreino, horaTreino, fkUsuarioTreino);
    var instrucao = `
        INSERT INTO treinos (diaTreino, horaTreino, fkUsuarioTreino) VALUES ('${diaTreino}', '${horaTreino}', '${fkUsuarioTreino}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarDados(nomeAsso, faixa, nomeSensei, medalhas, fkUsuarioDados) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarDados():", nomeAsso, faixa, nomeSensei, medalhas, fkUsuarioDados);
    var instrucao = `
        INSERT INTO dados (nomeAsso, faixa, nomeSensei, medalhas, fkUsuarioDados) VALUES ('${nomeAsso}', '${faixa}', '${nomeSensei}', '${medalhas}','${fkUsuarioDados}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQtdTreinos(idUsuario) {
    console.log("ACESSEI O DASH MODEL para buscar quantidade de treinos por usuário, function listarQtdTreinos()", idUsuario);

    var instrucao = `
    select count(idTreino) as qtdTreino from treinos 
	inner join usuario 
		on fkUsuarioTreino = idUsuario
			where idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDia(idUsuario) {
    console.log("ACESSEI O DASH MODEL para buscar quantidade de treinos por dia, function buscarDia()", idUsuario);

    var instrucao = `

    select count(idTreino) as qtdTreino, traduz_dia(dayname(diaTreino)) as dia_semana from treinos
    where fkUsuarioTreino = '${idUsuario}'
    group by dia_semana;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterUltimosTreinos() {
    console.log("ACESSEI O OBTER ULTIMOS TREINOS \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterUltimosDiarios()");

    var instrucao = `
        SELECT idTreino, diaTreino, horaTreino
        FROM treinos
        ORDER BY idTreino DESC; `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function adicionarMelhorias(dificuldade, nivelDifi, facilidade, nivelFaci, fkUsuarioMel) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function adicionarMelhorias():", dificuldade, nivelDifi, facilidade, nivelFaci, fkUsuarioMel);
    var instrucao = `
        INSERT INTO melhorar (nomeDificuldade, nivelDificuldade, nomeFacilidade, nivelFacilidade, fkUsuarioMel) VALUES ('${dificuldade}', '${nivelDifi}', '${facilidade}', '${nivelFaci}', '${fkUsuarioMel}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMelhorias(idUsuario) {
    console.log("ACESSEI O DASH MODEL para listar as melhorias do usuário, function listarMelhorias()", idUsuario);

    var instrucao = `
    select nomeDificuldade, nivelDificuldade, nomeFacilidade, nivelFacilidade from melhorar 
	inner join usuario 
		on fkUsuarioMel = idUsuario
			where idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    adicionarTreino,
    atualizarDados,
    listarQtdTreinos,
    buscarDia,
    obterUltimosTreinos,
    adicionarMelhorias,
    listarMelhorias
    // continuar
};