function verificaDados() {

    const cadBtn = document.getElementById('btnCadastroAviso');
    let newAviso = document.getElementById('tituloDoAviso').value;
    let newCorpoAviso = document.getElementById('corpoDoAviso').value;
    let newDataAviso = document.getElementById('dataDoAviso').value;

    if (newAviso != '' && newCorpoAviso != '' && newDataAviso !='') {
        cadBtn.removeAttribute('disabled');
    } else {
        cadBtn.setAttribute('disabled', 'true');
    }
}

/*verifica se há dados inclusos no database do localstorage*/
function dataRead() {
    let strData = localStorage.getItem('dbAvisos');
    let objData = {};

    if (strData) {
        objData = JSON.parse(strData);  /* inclui a string com os dados lidos (strData) no objeto contendo os dados (objData) */
    }
    else {
        objData = {
            aviso: [{ titulo: "", corpoDoAviso: "", dataAviso: "", publicoAlvo: "" }]
        }
    }

    return objData;

}

/* salva os dados no database do localstorage */
function dataSave(data) {

    localStorage.setItem('dbAvisos', JSON.stringify(data))

}

/* imprime os dados na página */
function dataPrint(e) {

    let screen = document.getElementById('screen');
    let strHtml = '';
    let objData = dataRead();

    for (i = 0; i < objData.aviso.length; i++) {
        strHtml += `<p class="list-group-item list-group-item-action> <strong>Título: </strong>${objData.aviso[i].titulo}; <strong>Corpo do Aviso: </strong>${objData.aviso[i].corpoDoAviso}; <strong>Data: </strong>${objData.aviso[i].dataAviso}; <strong>Público Alvo: </strong> ${objData.aviso[i].publicoAlvo}<\p>`
    }

    screen.innerHTML = strHtml;
}

/*adiciona uma nova aviso ao database do localstorage*/
function dataAdd(e) {

    const locale = 'pt-br'
    /*leitura dos dados do localstorage*/
    let objData = dataRead();

    /* incluir as entradas em cada string */
    let newAviso = document.getElementById('tituloDoAviso').value;
    let newCorpoAviso = document.getElementById('corpoDoAviso').value;
    let newDataAviso = document.getElementById('dataDoAviso').value;
    let newPublicoAlvo = document.getElementById('publicoAlvo').value;


    let arrayData = newDataAviso.split('-');
    let formatDate = new Date(arrayData[0], arrayData[1] - 1, arrayData[2])

    /* inclui as strings no objeto */
    let newObjAviso = {
        titulo: newAviso,
        corpoDoAviso: newCorpoAviso,
        dataAviso: formatDate.toLocaleDateString(locale).toString(),
        publicoAlvo: newPublicoAlvo
    };

    objData.aviso.push(newObjAviso); /* adiciona o novo cadastro ao array aviso */

    /* salvar no localstorage os novos dados */
    dataSave(objData);

}

function deleteData(e) {

    objData = dataRead();

    let deleteAviso = document.getElementById('tituloDoAviso').value;
    let deleteDataAviso = document.getElementById('dataDoAviso').value;

    for (let i = 0; i < objData.aviso.length; i++) {

        if (deleteAviso == objData.aviso[i].titulo && deleteDataAviso == objData.aviso[i].dataAviso && deleteAviso != '' && deleteDataAviso != '') {
            objData.aviso.splice(i, 1);
            dataSave(objData);
            alert("Aviso" + aviso[i].titulo + "apagado com sucesso");
            continue;
        }
    }

}
