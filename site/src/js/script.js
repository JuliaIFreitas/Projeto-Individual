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
var nomeKata = ``;

function avancar() {
    qtdKata = Number(input_qtdKata.value);
    // nomeKata = input_nomeKata.value;
    // listaKata.push(nomeKata);

    for (posicao = 0; posicao < qtdKata; posicao++) {
        div_novoKata.innerHTML += `
            <p>Digite o nome do kata: </p>
            <input class="campo" placeholder="Nome do Kata" id="input_nomeKata"><br><br>
            `;
    }

    div_addKata.innerHTML = `
        <button class="botao" onclick="continuar()">Continuar</button>   
        `;
}

function continuar() {

    nomeKata = input_nomeKata.value;
    listaKata.push(nomeKata);

    for (posicao = 0; posicao < qtdKata; posicao++) {
        div_novoKata.innerHTML += `
            <p>Digite quantos movimentos sabe: </p><input class="campo" placeholder="Número de movimentos" type="number" id="input_qntSabe"><br><br>
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