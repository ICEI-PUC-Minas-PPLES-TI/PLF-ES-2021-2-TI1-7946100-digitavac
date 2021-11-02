// CRUD de cadastro de campanhas

    const openModal = () => document.getElementById('modal')
    .classList.add('active')


    const closeModal = () => {
        clearFields()
        document.getElementById('modal') .classList.remove('active')
    }
   



const dadosVacina = {
nome: "Pfizer",
dataI: "05/11/2021",
dataF: "11/11/2021",
obs: "Vacina administrada contra a COVID-19"

}

// Armazenamento no localstorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_vacina')) ?? []
const setLocalStorage = (dbVacina) => localStorage.setItem("db_vacina", JSON.stringfy (dbVacina));

const deleteVacina = (index) =>{

   const dbVacina = lerVacina()
   dbVacina.splice(index,1)
   setLocalStorage(dbVacina)
}

const updateVacina = (index, vacina) => {

    const dbVacina = lerVacina()
    dbVacina[index] = vacina
    setLocalStorage(dbVacina)

}

const lerVacina = () => getLocalStorage()



const nomeVacina (vacina) =>{

    const dbVacina = getLocalStorage ()
    dbVacina.push(vacina)
    setLocalStorage(dbVacina)

}

const isValidFields = () => {

    document.getElementById('cadastro_historico').reportValidity()
}
//Interação com layout

const clearFields = () => {

    const fields = document.querySelectorAll('.lbl_cadastro')
    fields.forEach (field => field.value = "")
}

const saveVacina = () =>{

    if(isValidFields()){

        const vacina={

            nome: document.getElementById('nome').value,
            data inicial: document.getElementById('data').value,
            data final: document.getElementById('data_final').value,
            observações: document.getElementById('obs').value,

        }
        nomeVacina(vacina)
        closeModal()
        
    }
}

// Eventos

document.getElementById ('Cadastrar')
    .addEventListener ('click', saveVacina)
