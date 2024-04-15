const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', async()=>{
    console.log(usernameInput.value, passwordInput.value)
    // tryLogin(usernameInput.value, passwordInput.value)
    tryLogin(usernameInput.value, passwordInput.value)
})

const tryLogin = async(username, password)=>{
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            resolve(json)
        })
        .catch(error => {
            console.error('Error creating new customer:', error);
            reject(error);
        });
    })
}

