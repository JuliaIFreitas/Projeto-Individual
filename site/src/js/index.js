function mostrarFoto() {
    const modal = document.getElementById('modalImg1')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto' || e.target.id == 'modalImg1') {
            modal.classList.remove('abrir')
        }
    })
}

function mostrarFoto2() {
    const modal2 = document.getElementById('modalImg2')
    modal2.classList.add('abrir2')

    modal2.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto2' || e.target.id == 'modalImg2') {
            modal2.classList.remove('abrir2')
        }
    })
}

function mostrarFoto3() {
    const modal3 = document.getElementById('modalImg3')
    modal3.classList.add('abrir3')

    modal3.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto3' || e.target.id == 'modalImg3') {
            modal3.classList.remove('abrir3')
        }
    })
}

function mostrarFoto4() {
    const modal4 = document.getElementById('modalImg4')
    modal4.classList.add('abrir4')

    modal4.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto4' || e.target.id == 'modalImg4') {
            modal4.classList.remove('abrir4')
        }
    })
}

function mostrarFoto5() {
    const modal5 = document.getElementById('modalImg5')
    modal5.classList.add('abrir5')

    modal5.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto5' || e.target.id == 'modalImg5') {
            modal5.classList.remove('abrir5')
        }
    })
}

function mostrarFoto6() {
    const modal6 = document.getElementById('modalImg6')
    modal6.classList.add('abrir6')

    modal6.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto6' || e.target.id == 'modalImg6') {
            modal6.classList.remove('abrir6')
        }
    })
}

function mostrarOds3() {
    const modal3 = document.getElementById('modalOds3')
    modal3.classList.add('abrirOds3')

    modal3.addEventListener('click', (e) => {
        if (e.target.id == 'fecharOds3' || e.target.id == 'modalOds3') {
            modal3.classList.remove('abrirOds3')
        }
    })
}

function mostrarOds8() {
    const modal8 = document.getElementById('modalOds8')
    modal8.classList.add('abrir8')

    modal8.addEventListener('click', (e) => {
        if (e.target.id == 'fecharOds8' || e.target.id == 'modalOds8') {
            modal8.classList.remove('abrir8')
        }
    })
}

function mostrarFaixa(faixaId) {

    var faixa = document.querySelector('.descricaoFaixas');

    var cores = ["FAIXA BRANCA", "FAIXA AMARELA", "FAIXA VERMELHA", "FAIXA LARANJA", "FAIXA VERDE", "FAIXA ROXA", "FAIXA MARROM", "FAIXA PRETA"];
''

    var descricao = [
        // branca
        "<p class='representacao'>Representa a pureza, o começo, a iniciação, é o verdadeiro começo nas artes marciais do karatê.</p><h3>Especificações</h3><p class= 'especificacoes'> 7º KYU (Classe)<br><br><span class='negrito'>Branco em japonês: </span> Shiro<br><br> <span class='negrito'>Tempo para graduação:</span> 6 meses <br><br><span class='negrito'> Kata: Heian Shodan <br></p> <br>",
        // amarela
        "<p class='representacao'> Assim como um sol que desponta todos os dias, ela significa que é um iniciante no Karatê</p><h3>Especificações</h3><p class= 'especificacoes'>6º KYU (Classe)<br><br><span class='negrito'>Amarelo em japonês:</span> Kiiro<br><br> <span class='negrito'>Tempo para graduação:</span> 6 meses <br><br> <span class='negrito'>Kata:</span> Heian Nidan <br></p>",
        // vermelha
        "<p class='representacao'>Sugere motivação, atividade e vontade. Também simboliza aquilo que deve ser contido pelo seu portador</p><h3>Especificações</span></h3> <p class= 'especificacoes'>5º KYU (Classe)<br><br><span class='negrito'>Vermelho em japonês:</span> Aka<br><br><span class='negrito'>Tempo para graduação:</span> 6 meses <br><br> <span class='negrito'>Kata:</span> Heian Sandan <br></p>",
        // laranja
        "<p class='representacao'> Simboliza aquilo que o praticante deve buscar: o encorajamento, robustez, gentileza e tolerância </p><h3>Especificações</h3><p class= 'especificacoes'>4º KYU (Classe)<br><br><span class='negrito'>Laranja em japonês:</span> Orenji<br><br><span class='negrito'>Tempo para graduação:</span> 6 meses <br><br><span class='negrito'>Kata:</span> Heian Yodan <br></p>",
        // verde
        "<p class='representacao'>Ela representa a esperança, a fé e o crescimento. É a cor mais harmoniosa e calmante de todas </p><h3>Especificações</h3><p class= 'especificacoes'>3º KYU (Classe)<br><br><span class='negrito'>Verde em japonês:</span> Midori<br><br><span class='negrito'>Tempo para graduação:</span> 1 ano <br><br><span class='negrito'>Kata:</span> Heian Godan <br></p>",
        // roxa
        "<p class='representacao'>Representa o mistério, a dignidade, a inspiração e justiça.</p><h3>Especificações</h3><p class= 'especificacoes'>2º KYU (Classe)<br><br><span class='negrito'>Roxo em japonês: </span>Murasaki<br><br><span class='negrito'>Tempo para graduação:</span> 1 ano <br><br><span class='negrito'>Kata: </span>Tekki Shodan <br></p>",
        // marrom
        "<p class='representacao'>É a cor da solidificação. Representa a constância, a disciplina, a uniformidade adquirida. Também sugere segurança e isolamento.</p><h3>Especificações</h3><p class= 'especificacoes'>1º KYU (Classe)<br><br> <span class='negrito'>Marrom em japonês:</span> Murasaki<br><br><span class='negrito'>Tempo para graduação:</span> 18 meses a 24 meses <br><br><span class='negrito'>Katas: </span>Para o exame de faixa deve apresentar os cinco Heian, Tekki Shodan, além do Bassai Dai, Jion, Enpi ou Kanku Dai <br></p>",
        // preta
        "<p class='representacao'>É a junção de todas as cores. Representa autocontrole, serenidade, disciplina e responsabilidade, dignidade e conhecimento. É a cor do poder. </p><h3>Especificações</h3><br><br><p class= 'especificacoes'>1º DAN (Grau)<br><span class='negrito'>Preto em japonês:</span> Kuro<br><br><span class='negrito'>Tempo para graduação:</span> 3 anos <br><br> <span class='negrito'> Katas:</span> Para o 1º Dan, deve saber os 5 Heian e apresentar um deles. Apresentar também o Tekki Shodan. Além desses, deve executar um dos seguintes katas: Bassai Dai, Jion, Enpi ou Kanku Dai<br></p>"
    ]

    var posicao = cores.indexOf(faixaId);

    if (posicao != -1) {
        faixa.innerHTML = `<h2 class="significadoCores"> ${cores[posicao]} </h2> 
        <div class="caixaCor">
         <p> 
            ${descricao[posicao]} 
         </p> 
         </div>
        `;
    }

}

// function mostrarFaixa() {
//     const modalfaixa = document.getElementById('modalFaixa')
//     modalfaixa.classList.add('abrirfaixa')

//     modalfaixa.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixa' || e.target.id == 'modalFaixa') {
//             modalfaixa.classList.remove('abrirfaixa')
//         }
//     })
// }

// function mostrarFaixaAmarela() {
//     const modalfaixaamarela = document.getElementById('modalFaixaAmarela')
//     modalfaixaamarela.classList.add('abrirfaixaamarela')

//     modalfaixaamarela.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixaamarela' || e.target.id == 'modalFaixaAmarela') {
//             modalfaixaamarela.classList.remove('abrirfaixaamarela')
//         }
//     })
// }

// function mostrarFaixaVerm() {
//     const modalfaixaverm = document.getElementById('modalFaixaVerm')
//     modalfaixaverm.classList.add('abrirfaixaverm')

//     modalfaixaverm.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixaverm' || e.target.id == 'modalFaixaVerm') {
//             modalfaixaverm.classList.remove('abrirfaixaverm')
//         }
//     })
// }

// function mostrarFaixaLara() {
//     const modalfaixalara = document.getElementById('modalFaixaLara')
//     modalfaixalara.classList.add('abrirfaixalara')

//     modalfaixalara.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixalara' || e.target.id == 'modalFaixaLara') {
//             modalfaixalara.classList.remove('abrirfaixalara')
//         }
//     })
// }

// function mostrarFaixaVerde() {
//     const modalfaixaverde = document.getElementById('modalFaixaVerde')
//     modalfaixaverde.classList.add('abrirfaixaverde')

//     modalfaixaverde.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixaverde' || e.target.id == 'modalFaixaVerde') {
//             modalfaixaverde.classList.remove('abrirfaixaverde')
//         }
//     })
// }

// function mostrarFaixaRoxa() {
//     const modalfaixaroxa = document.getElementById('modalFaixaRoxa')
//     modalfaixaroxa.classList.add('abrirfaixaroxa')

//     modalfaixaroxa.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixaroxa' || e.target.id == 'modalFaixaroxa') {
//             modalfaixaroxa.classList.remove('abrirfaixaroxa')
//         }
//     })
// }

// function mostrarFaixaMarrom() {
//     const modalfaixamarrom = document.getElementById('modalFaixaMarrom')
//     modalfaixamarrom.classList.add('abrirfaixamarrom')

//     modalfaixamarrom.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixamarrom' || e.target.id == 'modalFaixaMarrom') {
//             modalfaixamarrom.classList.remove('abrirfaixamarrom')
//         }
//     })
// }

// function mostrarFaixaPreta() {
//     const modalfaixapreta = document.getElementById('modalFaixaPreta')
//     modalfaixapreta.classList.add('abrirfaixapreta')

//     modalfaixapreta.addEventListener('click', (e) => {
//         if (e.target.id == 'fecharfaixapreta' || e.target.id == 'modalFaixaPreta') {
//             modalfaixapreta.classList.remove('abrirfaixapreta')
//         }
//     })
// }