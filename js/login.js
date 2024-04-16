import { User } from "./classes/user.js"
const user = new User();

const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', (event)=>{
    console.log(usernameInput.value, passwordInput.value)
    event.preventDefault()
    const username = usernameInput.value
    const password = passwordInput.value

    user.tryLogin(username, password).then(user => {
        console.log(user)
    })
    .then(()=>{
        const token = sessionStorage.getItem('accessToken');
        console.log(token)
        user.fetchProfile(token)
    })
    .then(()=>{
        window.location.href = "http://127.0.0.1:5501/pages/admin_dashboard/admin-home.html";
    })
    .catch(error => {
        alert(error)
    })
})

