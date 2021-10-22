
//Tratar entradad de nome
nome.oninput = () => {
    if ('!@#$%ˆ&*()123456789'.indexOf(nome.value.charAt(nome.value.length - 1)) >= 0) {
      nome.value = nome.value.substr(0, nome.value.length - 1);
    }
}

email.onblur = () => {
    let mensagemEmail = document.getElementById("msgEmail");

    if (email.value.indexOf("@") < 0) {    
        mensagemEmail.style.color = "red";
        mensagemEmail.innerText = "O email deve conter @";
    }
    else{
        mensagemEmail.innerText = "";
    }
}

function leDados () {
    let strDados = localStorage.getItem('db_cadastros');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { cadastros: [
        ]}
    }

    return objDados;
}

function tentarGravar(e) {

    objDados = leDados();

    strEmail = email.value;
    strNome = nome.value;
    strSenha = senha.value;

    let cadatrar  = {email: strEmail, nome: strNome, senha: strSenha}

    objDados.cadastros.push(cadatrar)

    salvaDados(objDados)
    console.log("Working")
}

function salvaDados (dados) {
    localStorage.setItem ('db_cadastros', JSON.stringify (dados));
}