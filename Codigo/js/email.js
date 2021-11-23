//Envio automático de e-mail pós-cadastro
<script src="https://smtpjs.com/v3/smtp.js">
</script>

function  sendMsg(x) {
    x.preventeDefault()
// declaração das constantes envolvidas
const form = document.getElementById('cadastro');
const email = document.getElementById ('email');
const name = document.getElementById('nome');
const senha = document.getElementById('senha');

//Função de mandar e-mail

Email.send({
    SecureToken : "990fe0a1-48a4-4334-bed7-52be43c979dc",
    To : email.value,
    From : email.value,
    Subject : "DigitaVac - Cadastro feito",
    Body : "OLÁ! Você acaba de completar a sua inscrição no mais novo cronograma de vacinação digital. Fique atentx aos nossos chamados, pois sempre que houverem novas campanhas atualizaremos via e-mail."
}).then(
  message => alert(message)
);

//event listener

form.addEventListener('submit',sendMsg);
