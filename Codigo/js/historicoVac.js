function verificaDados() {

    const cadBtn = document.getElementById('cadastroBtn');
    let newVacina = document.getElementById('vacField').value;
    let newDataDaAplicacao = document.getElementById('aplicationField').value;
    if (newVacina != '' && newDataDaAplicacao != '') {
        cadBtn.removeAttribute('disabled');
    } else 
    {
        cadBtn.setAttribute('disabled', 'true');
    }

}

/*verifica se há dados inclusos no database do localstorage*/
function dataRead() {
    let strData = localStorage.getItem('dbVac');
    let objData = {};

    if (strData) {
        objData = JSON.parse(strData);  /* inclui a string com os dados lidos (strData) no objeto contendo os dados (objData) */
    }
    else {
        objData = {
            historico: []
        }
    }

    return objData;
}

/* salva os dados no database do localstorage */
function dataSave(data) {

    localStorage.setItem('dbVac', JSON.stringify(data))

}


/* imprime os dados na página */
function dataPrint() {

    let screen = document.getElementById('screenVac');
    let strHtml = '';
    let objData = dataRead();



    for (i = 0; i < objData.historico.length; i++) {
        strHtml += `<tr>
        <td scope="row">${objData.historico[i].vacina}</td>
        <td>${objData.historico[i].dataDaAplicacao}</td>
        <td>${objData.historico[i].proximaAplicacao}</td>
        <td>${objData.historico[i].observacoes}</td>
        <td><button type="button" onclick="completeData(${objData.historico[i].id}), saveAuxEdit(${objData.historico[i].id})" class="btn btn-primary" data-toggle="modal" data-target="#edit-modal">
            Editar </button>
        </td>
      </tr>`
    }

    screen.innerHTML = strHtml;
}


/*adiciona uma nova vacina ao database do localstorage*/
function dataAdd(e) {

    const locale = 'pt-br'
    /*leitura dos dados do localstorage*/
    let objData = dataRead();

    /* incluir as entradas em cada string */
    let idVac = objData.historico.length;
    let newVacina = document.getElementById('vacField').value;
    let newDataDaAplicacao = document.getElementById('aplicationField').value;
    let newProximaAplicacao = document.getElementById('nextAplicationField').value;
    let newObservacoes = document.getElementById('observationField').value;


    /* inclui as strings no objeto */
    let newObjVac = {
        id: idVac,
        vacina: newVacina,
        dataDaAplicacao: newDataDaAplicacao,
        proximaAplicacao: newProximaAplicacao,
        observacoes: newObservacoes
    };

    objData.historico.push(newObjVac); /* adiciona o novo cadastro ao array histórico */

    /* salvar no localstorage os novos dados */
    dataSave(objData);
    dataPrint();    
}

function completeData(id) {
    console.log(id);

    let dbVac = dataRead();

    for (i = 0; i < dbVac.historico.length; i++) {

        if(id == dbVac.historico[i].id)
        {
            editVacField.value = dbVac.historico[i].vacina,
            editAplicationField.value = dbVac.historico[i].dataDaAplicacao,
            editNextAplicationField.value = dbVac.historico[i].proximaAplicacao,
            editObservationField.value = dbVac.historico[i].observacoes
        }
    }
}

function deleteData(e) {

    objData = dataRead();

    let deleteVac = document.getElementById('editVacField').value;
    let deleteDataDaAplicacao = document.getElementById('editAplicationField').value;

    for (let i = 0; i < objData.historico.length; i++) {

        if (deleteVac == objData.historico[i].vacina && deleteDataDaAplicacao == objData.historico[i].dataDaAplicacao) {
            
            objData.historico.splice(i, 1);

            dataSave(objData);
            dataPrint();
        }
    }

}

var auxId;

function saveAuxEdit(id)
{
    auxId = id;
}

function editData(e)
{
    objData = dataRead();

    let editVac = editVacField.value;
    let editDataDaAplicacao = editAplicationField.value;
    let editProximaAplicacao = editNextAplicationField.value;
    let editObservacoes = editObservationField.value;

    for(i=0; i < objData.historico.length; i++)
    {
        if(auxId == objData.historico[i].id)
        {
            objData.historico.splice(i, 1);
            
            let ObjVac = {
                id: auxId,
                vacina: editVac,
                dataDaAplicacao: editDataDaAplicacao,
                proximaAplicacao: editProximaAplicacao,
                observacoes: editObservacoes
            };
        
            objData.historico.push(ObjVac); /* adiciona o novo cadastro ao array histórico */
        
            /* salvar no localstorage os novos dados */
            dataSave(objData);   
        }
    }
    dataPrint();
}

