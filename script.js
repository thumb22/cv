
const TOKEN = "6872077195:AAGQHOMj9yysQ5FoVqQ1m4L1hmZN3ND1ZSo"
const CHAT_ID = "-1002062041311"
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const URI_API_DOCUMENT = `https://api.telegram.org/bot${TOKEN}/sendDocument`
const success = document.getElementById('success')
const successDocument = document.getElementById('success-document')

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()

    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель: </b> ${ this.name.value }\n`
    message += `<b>Почта: </b> ${ this.email.value }\n`
    message += `<b>Сообщение: </b> ${ this.message.value }`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })

    // Message sent successfully
    .then((res) => {
        this.name.value = ""
        this.email.value = ""
        this.message.value = ""
        alert('Ваше сообщение отправлено!')
    })

    // Message sent Error
    .catch((err) => {
        console.warn(err)
    })

    // Message sending finished
    .finally(() => {
        console.log('Сообщение отправлено!')
    })
})
// This script can used for sending messages and Files in Landing Pages | By TwoX Studio | All rights reserved.

document.addEventListener("DOMContentLoaded", function () {
    var allLinks = document.querySelectorAll(".info a, .card a");

    allLinks.forEach(function (link) {
        link.setAttribute("target", "_blank");
    });
});