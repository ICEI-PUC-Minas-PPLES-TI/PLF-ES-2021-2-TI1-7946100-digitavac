const Login_Link = "loginadm.html";

var db_adms = {};

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
    adms: [
        { "id": generateUUID (), "email": "1@1.com", "senha": "123"}
    ]
};


function loginApp () {
    usuarioAtualJSON = sessionStorage.getItem('usuarioAtual');
    if (usuarioAtualJSON) {
        usuarioAtual = JSON.parse (usuarioAtualJSON);
    }
    
    var admsJSON = localStorage.getItem('db_adms');

    if (!admsJSON) {  
        
        db_adms = dadosTeste;

        localStorage.setItem('db_adms', JSON.stringify (dadosTeste));
    }
    else  { 
        
        db_adms = JSON.parse(admsJSON);    
    }
};


function fazLogin (email, senha) {
    
    for (var i = 0; i < db_adms.adms.length; i++) {
        var adm = db_adms.adms[i];
        
        if (email == adm.email && senha == adm.senha) {
            usuarioAtual.id = adm.id;

            sessionStorage.setItem ('usuarioAtual', JSON.stringify (usuarioAtual));

            return true;
        }
    }

    return false;
}

function logoutUser () {
    usuarioAtual = {};
    sessionStorage.setItem ('usuarioAtual', JSON.stringify (usuarioAtual));
    window.location = Login_Link;
}


loginApp ();
