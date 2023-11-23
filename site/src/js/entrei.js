function atualizarDados() {
    // aguardar();

    var nomeAssoVar = input_associacao.value;
    var faixaVar = id_select.value;
    var nomeSenseiVar = input_sensei.value;
    var medalhasVar = input_qtdMedalhas.value;

    if (
        nomeAssoVar == "" ||
        faixaVar == "" || 
        nomeSenseiVar == "" ||
        medalhasVar == "" 
    ) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Todos os campos estão em branco";

        // finalizarAguardar();
        return false;
    } else if (qtdMovimentosVar < 0) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Insira uma quantidade válida";

        // finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 5000);
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Atualizando dados...";
    }

    fetch("/dash/atualizarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeAssoServer: nomeAssoVar,
            faixaServer: faixaVar,
            nomeSenseiServer: nomeSenseiVar,
            medalhasServer: medalhasVar

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                setTimeout(() => {
                    window.location = "entrei.html";
                }, "2000");
            } else {
                throw "Houve um erro ao tentar atualizar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        })
    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none";
}