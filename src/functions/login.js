import { validateMessage } from './validator.js'
import { validateTxt } from '../content/polish/validate.text.js'

export const login = (e) => {
    e.preventDefault()
    const loginForm = document.querySelector('#login').value
    const passwordForm = document.querySelector('#password').value
    const payload = {
        username: loginForm,
        password: passwordForm
    }
    fetch('https://zwzt-zadanie.netlify.app/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if(response.status === 200) return window.location.href = "#/success"
        else if(response.status === 401 ) return validateMessage(validateTxt.wrongPasswordTxt)
        else {validateMessage(validateTxt.defaultErrorTxt)}
    })
    .catch((error) => console.error(error));
}