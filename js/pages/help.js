const email_expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const mail_div = document.getElementById("wrong-mail")

function validateEmail() {
    const email = document.getElementById("email")
    if (email_expression.test(email.value) == false){
        showWrongEmail();
    }
}

function showWrongEmail() {
    mail_div.innerHTML = `<p class="message error">Ingrese un Email válido</p>`
}