function addkata() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    })
}

var listaKata = [];
var qtdKata = ``;

function avancar() {
    qtdKata = Number(input_qtdKata.value);

    for (posicao = 0; posicao < qtdKata; posicao++) {
        div_novoKata.innerHTML += `
            Digite o nome do kata: <input id="input_nomeKata"><br><br>
            `;
        listaKata.push(input_nomeKata.value);
    }

    div_addKata.innerHTML = `
        <button class="botao" onclick="continuar()">Continuar</button>   
        `;
}

function continuar() {

    for (posicao = 0; posicao < qtdKata; posicao++) {
        div_novoKata.innerHTML += `
            Digite quantos moviemntos sabe: <input type="number" id="input_qntSabe"><br><br>
            `;
    }

    div_finalizarKata.innerHTML = `
        <button class="botao" onclick="addKata()">Adicionar</button>   
        `;

    // var btn = document.querySelector("#id_botao");

    // btn.addEventListener("click", function () {
    //     var number = document.querySelector("#input_qntSabe").value;
    //     localStorage.setItem('valuenumber', number);
    // })
}