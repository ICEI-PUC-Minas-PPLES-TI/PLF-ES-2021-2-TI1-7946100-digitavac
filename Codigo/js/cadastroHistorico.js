/*verifica se há dados inclusos no database do localstorage*/
function dataRead() {
    let strData = localStorage.getItem('db');
    let objData = {};

    if (strData) 
    {
        objData = JSON.parse (strData);  /* inclui a string com os dados lidos (strData) no objeto contendo os dados (objData) */
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

    localStorage.setItem ('db', JSON.stringify (data))

}

/*adiciona uma nova vacina ao database do localstorage*/
function dataAdd() {
    /*leitura dos dados do localstorage*/
    let objData = dataRead ();

    /* incluir um novo contato */
    let newVacina = document.getElementById('vacField').value;
    let newDataDaAplicacao = document.getElementById('aplicationField').value;
    let newProximaAplicacao = document.getElementById('nextAplicationField').value;
    let newObservacoes = document.getElementById('observationField').value;

    let newObjVac = {
        vacina: newVacina,
        dataDaAplicacao: newDataDaAplicacao,
        proximaAplicacao: newProximaAplicacao,
        observacoes: newObservacoes
    };

    objData.historico.push (newObjVac); /* adiciona o novo cadastro ao array histórico */

    /* salvar no localstorage os novos dados */
    dataSave(objData);
    
}

/* botão de cadastrar a vacina chama a função dataAdd*/
document.getElementById ('registerBtn').addEventListener('click', dataAdd)
