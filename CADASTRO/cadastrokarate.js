// Variávei tela cadastro
var nome_cadastro;
var sobrenome_cadastro;
var email_cadastro;
var tel_cadastro;
var senha_cadastro;
var confirmar_senha_cadastro;


//  Varáveis tela cadastro associação
var associacao_cadastro;
var faixa_cadastro;
var sensei_cadastro;

var tela_status = 0;

function changeTela() {
    if (tela_status == 0) {
        telaCad() 
    } else if (tela_status == 1) {
        telaAss()
    }
}

function avancar() {
    // pega o valor das inputs
    nome_cadastro = input_nome.value;
    sobrenome_cadastro = input_sobrenome.value;
    email_cadastro = input_email.value;
    tel_cadastro = input_telefone.value;
    senha_cadastro = input_senha.value;
    confirmar_senha_cadastro = input_confirmarSenha.value;
}