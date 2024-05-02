const TOKEN = "7181961801:AAF_chw2_DcSmrp1FvWE5McG1mJAeLbsd0Q"
const CHAT_ID = "771451766"
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const URI_API_DOCUMENT = `https://api.telegram.org/bot${TOKEN}/sendDocument`
const success = document.getElementById('success')
const successDocument = document.getElementById('success-document')

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()

    let message = `<i><b>Сообщение!</b></i>\n`
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
        Swal.fire({
            title: 'Success',
            text: 'Thank you for writing to me! I will answer you shortly!',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    })

    // Message sent Error
    .catch((err) => {
        console.warn(err)
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong!',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
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

window.addEventListener("load", function (event) {
    document.querySelector('.avatar').classList.add('loaded')
});

// document.addEventListener('DOMContentLoaded', () => {
//     const contentDiv = document.querySelector('.content');
//     const navLinks = document.querySelectorAll('.lang_switch');
//     const loadingOverlay = document.querySelector('.loading-overlay');
  
//     const showLoadingOverlay = () => {
//       loadingOverlay.style.opacity = '1';
//     };
  
//     const hideLoadingOverlay = () => {
//       loadingOverlay.style.opacity = '0';
//     };
  
//     const loadScripts = (url) => {
//       if (url.includes('about')) {
//         document.querySelector('.btn').addEventListener('click', (e) => {
//           console.log(e);
//         });
//       }
//     };
  
//     const loadPage = (url) => {
//       showLoadingOverlay();
  
//       fetch(url)
//         .then(response => response.text())
//         .then(html => {
//           const parser = new DOMParser();
//           const doc = parser.parseFromString(html, 'text/html');
//           const newContent = doc.querySelector('.content').innerHTML;
  
//           contentDiv.classList.add('fade-out');
  
//           contentDiv.innerHTML = newContent;
//           document.title = doc.title;
  
//           setTimeout(() => {
//             contentDiv.classList.remove('fade-out');
//             history.pushState({}, '', url);
//             hideLoadingOverlay();
//           }, 500);
//         })
//         .then(() => {
//           loadScripts(url);
//         });
//     };
  
//     navLinks.forEach(el => {
//       el.addEventListener('click', (e) => {
//         e.preventDefault();
  
//         const url = e.currentTarget.getAttribute('href');
//         loadPage(url);
//       });
//     });
  
//     loadPage(window.location.pathname);
  
//     window.addEventListener('popstate', () => {
//       loadPage(window.location.pathname);
//     });
//   });
  