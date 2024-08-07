const TOKEN = "7181961801:AAF_chw2_DcSmrp1FvWE5McG1mJAeLbsd0Q";
const CHAT_ID = "771451766";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById("success");
const successDocument = document.getElementById("success-document");

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<i><b>Сообщение!</b></i>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Почта: </b> ${this.email.value}\n`;
    if (message) message += `<b>Сообщение: </b> ${this.message.value}`;

    axios
        .post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        })

        // Message sent successfully
        .then((res) => {
            this.name.value = "";
            this.email.value = "";
            this.message.value = "";
            Swal.fire({
                title: "Success",
                text: "Thank you for writing to me! I will answer you shortly!",
                icon: "success",
                confirmButtonText: "Ok",
            });
        })

        // Message sent Error
        .catch((err) => {
            console.warn(err);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        })

        // Message sending finished
        .finally(() => {
            console.log("Сообщение отправлено!");
        });
});
// This script can used for sending messages and Files in Landing Pages | By TwoX Studio | All rights reserved.

document.addEventListener("DOMContentLoaded", function () {
    var allLinks = document.querySelectorAll(".info a, .card a");

    allLinks.forEach(function (link) {
        link.setAttribute("target", "_blank");
    });
});

window.addEventListener("load", function (event) {
    document.querySelector(".avatar").classList.add("loaded");
});
