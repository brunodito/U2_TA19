document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form')
    const nameInput = document.getElementById('name')
    const passwordInput = document.getElementById('password')
    const emailInput = document.getElementById('email')

    const nameError = document.getElementById('nameError')
    const passwordError = document.getElementById('passwordError')
    const emailError = document.getElementById('emailError')

    function validarName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'El nombre es obligatorio'
            return false
        } else {
            nameError.textContent = ''
            return true
        }
    }

    function validarPsw() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres'
            return false
        } else {
            passwordError.textContent = ''
            return true;
        }
    }

    function validarEmail() {
        const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronEmail.test(emailInput.value)) {
            emailError.textContent = 'El correo electrónico no es válido'
            return false
        } else {
            emailError.textContent = ''
            return true
        }
    }

    function validarForm() {
        const nombreValidio = validarName()
        const pswValida = validarPsw()
        const emailValido = validarEmail()
        return nombreValidio && pswValida && emailValido
    }

    nameInput.addEventListener('input', validarName)
    passwordInput.addEventListener('input', validarPsw)
    emailInput.addEventListener('input', validarEmail)

    form.addEventListener('submit', function(event) {
        if (!validarForm()) {
            event.preventDefault()
        }
    })
})