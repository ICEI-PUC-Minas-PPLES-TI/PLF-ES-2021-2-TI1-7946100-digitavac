const LLink = "login.html";

var db_cadastros = {};

var usuarioAtual = {};

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


const dadosTeste = {
    user: [
        {"id": generateUUID (), "email": "1@1.com", "senha": "123"}
    ]
};


function loginApp () {
    usuarioAtualJSON = sessionStorage.getItem('usuarioAtual');
    if (usuarioAtualJSON) {
        usuarioAtual = JSON.parse (usuarioAtualJSON);
    }
    
    var usersJSON = localStorage.getItem('db_cadastros');

    if (!usersJSON) {  
        
        db_cadastros = dadosTeste;

        localStorage.setItem('db_cadastros', JSON.stringify (dadosTeste));
    }
    else  { 
        
        db_cadastros = JSON.parse(usersJSON);    
    }
};


function fazLogin (email, senha) {
    
    for (var i = 0; i < db_cadastros.user.length; i++) {
        var usuario = db_cadastros.user[i];
        
        if (email == usuario.email && senha == usuario.senha) {
            usuarioAtual.id = usuario.id;

            sessionStorage.setItem ('usuarioAtual', JSON.stringify (usuarioAtual));

            return true;
        }
    }

    return false;
}

function logoutUser () {
    usuarioAtual = {};
    sessionStorage.setItem ('usuarioAtual', JSON.stringify (usuarioAtual));
    window.location = LLink;
}


loginApp ();
