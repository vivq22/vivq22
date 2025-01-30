const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "img/mp3/Strawberry.mp3";
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.3;

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "") {
        alert("Por favor, ingresa tu nombre completo.");
        return;
    }

    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return;
    }

    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    if (phone === "") {
        alert("Por favor, ingresa tu número de teléfono.");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Por favor, ingresa un número de teléfono válido con 10 dígitos.");
        return;
    }

    if (subject === "") {
        alert("Por favor, ingresa un asunto.");
        return;
    }

    if (message === "") {
        alert("Por favor, ingresa tu mensaje.");
        return;
    }

    alert("¡Formulario enviado correctamente!");

});
