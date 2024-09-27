import "./style.css";
// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ
const $formulario = document.getElementById("register-form")
const $username = document.getElementById("username").value
const $email = document.getElementById("email").value
const $password = document.getElementById("password").value

const formData = new FormData($formulario);


formData.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:4321/auth/sign-up', {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: $username,
            email: $email,
            password: $password
        })
    })
    window.location.href = "/pages/main"
})
