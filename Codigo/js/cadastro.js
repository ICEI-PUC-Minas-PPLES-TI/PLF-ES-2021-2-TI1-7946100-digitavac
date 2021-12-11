

// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

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

newsenha2.onblur = () => {
    let mensagemNewSenha2 = document.getElementById("msgNewSenha2");

    if(newsenha1.value !== newsenha2.value){
        mensagemNewSenha2.style.color = "red";
        mensagemNewSenha2.style.paddingBottom = "10px";
        mensagemNewSenha2.innerText = "As senhas devem ser as mesmas";
    }
    else{
        mensagemNewSenha2.innerText = "";
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
            {id: generateUUID(), email: "joao@gmail.com", nome: "João Matheus", senha: "1234", userType:"user"},
            {id: generateUUID(), email: "Vitor@gmail.com", nome: "Vitor Herique", senha: "890", userType:"user"},
            {id: generateUUID(), email: "Jose@gmail.com", nome: "José oliveira", senha: "876", userType:"user"},
            {id: generateUUID(), email: "Matheus@gmail.com", nome: "Matheus Silva", senha: "456", userType:"user"},
            {id: generateUUID(), email: "Marcos@gmail.com", nome: "Marcos Algusto", senha: "4321", userType:"admin"}
        ]}
    }

    return objDados;
}

function lerUser() {
    let strId = sessionStorage.getItem('usuarioAtual')
    strId = JSON.parse (strId);
    let strDados = "";

    dados = leDados();

    for(let i = 0; i < dados.cadastros.length; i++){
        if(strId.id == dados.cadastros[i].id){
            return dados.cadastros[i];
        }
    }
}

function tentarGravar(e) {

    objDados = leDados();

    let strEmail = email.value;
    let strNome = nome.value;
    let strSenha = senha.value;

    let cadatrar  = {id: generateUUID(), email: strEmail, nome: strNome, senha: strSenha, userType:"user"}
    let jaExiste = false;

    for(let i = 0; i < objDados.cadastros.length; i++){
        if(objDados.cadastros[i].email == cadatrar.email){
            jaExiste = true;
            alert("Email já cadatrado")
            return
        }
    }

    if(strEmail != "" && strNome != "" && strNome != "" && !jaExiste){
        
        objDados.cadastros.push(cadatrar)
        salvaDados(objDados)
        alert('Cadastro efetuado com sucesso')
    }
    else{
        alert("Preencha todos os campos")
    }
}

function tentarGravarAdm(e) {

    objDados = leDados();

    let strEmail = email.value;
    let strNome = nome.value;
    let strSenha = senha.value;
    let strSenhaPraRegistro = senhaPraRegistro.value;

    let cadatrar  = {id: generateUUID(),  email: strEmail, nome: strNome, senha: strSenha, userType:"admin"}
    let jaExiste = false;

    for(let i = 0; i < objDados.cadastros.length; i++){
        if(objDados.cadastros[i].email == cadatrar.email){
            jaExiste = true;
            alert("Email já cadatrado")
            return;
        }
    }

    if(strSenhaPraRegistro == "1234"){
        if(strEmail != "" && strNome != "" && strNome != "" && !jaExiste){
        
            objDados.cadastros.push(cadatrar)
            salvaDados(objDados)
            alert('Cadastro efetuado com sucesso')
            email.value = ""
            nome.value = ""
            senha.value = ""
            senhaPraRegistro.value = ""

        }
        else{
            alert("Preencha todos os campos")
        }
    }
    else{
        alert("Preencha a senha pra registro corretamente")
    }
    
}

function salvaDados (dados) {
    localStorage.setItem ('db_cadastros', JSON.stringify (dados));
}

function salvarAutentificacao (dados) {
    localStorage.setItem ('user', JSON.stringify (dados));
}

function prencherValores(){
    user = lerUser();

    nome.value = user.nome
    email.value = user.email
}

function regravar(e){
    objDados = leDados();
    user = lerUser();

    let senhaAntiga = "";
    
    console.log(msgNewSenha2.value)
    if(msgNewSenha2.value == "" || msgNewSenha2.value == undefined){
        
        for(let i=0; i < objDados.cadastros.length; i++){
        
            if(user.email == objDados.cadastros[i].email && user.senha == objDados.cadastros[i].senha){
                senhaAntiga = objDados.cadastros[i].senha;
                userTypeOld = objDados.cadastros[i].userType;
                idOld = objDados.cadastros[i].id;
                objDados.cadastros.splice(i,1);
                salvaDados(objDados);
            }
        }

        let strEmail = email.value;
        let strNome = nome.value;
        var strSenha;
        if(newsenha1.value == "" || newsenha1.value == undefined){
            strSenha = senhaAntiga;
        }else{
            strSenha = newsenha1.value;
        }
        

        let cadatrar  = { id: idOld, email: strEmail, nome: strNome, senha: strSenha, userType: userTypeOld}
        let jaExiste = false;

        for(let i = 0; i < objDados.cadastros.length; i++){
            if(objDados.cadastros[i].email == cadatrar.email){
                jaExiste = true;
                alert("Email já cadatrado")
            }
        }

        if(strEmail != "" && strNome != "" && strNome != "" && !jaExiste){
            
            objDados.cadastros.push(cadatrar)
        }
    
        salvaDados(objDados)

        alert("Dados Autalizados")
    }

}

function excluir(e){
    objDados = leDados();
    user = lerUser();

    for(let i=0; i < objDados.cadastros.length; i++){
        
        if(user.email == objDados.cadastros[i].email && user.senha == objDados.cadastros[i].senha){
            objDados.cadastros.splice(i,1);
            salvaDados(objDados);
            alert("Usuario" + user.nome + " apagado com sucesso");
            window.location.href = "index.html";
        }
    }
}

function SelecionaUsuario(){
    db = leDados();
    for(i=0; i < db.cadastros.length; i++){
        if(idSelecionado == db.cadastros[i].id){
            return db.cadastros[i];
        }
    }
}