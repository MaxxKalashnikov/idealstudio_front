const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', async()=>{
    console.log(usernameInput.value, passwordInput.value)
    // tryLogin(usernameInput.value, passwordInput.value)
    fetch('http://localhost:3001/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: usernameInput.value,
        password: passwordInput.value
    })
})
.then(response => {
    if (response.ok) {
        console.log(response)
        return response.json(); // Получить тело ответа в формате JSON
    } else {
        throw new Error('Login failed'); // Обработать ошибку, если ответ не успешный
    }
})
.then(data => {
    // Получить токен из ответа
    const token = data.token;
    console.log(token)
    // Сохранить токен в localStorage или в куки для последующих запросов
    document.cookie = `access_token=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
})
.catch(error => {
    console.error('Login error:', error);
});


    
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

const fetchProfile = async()=>{
        fetch('http://localhost:3001/users/profile', {
            method: 'GET',
            credentials: 'include' 
        })
        .then(response => { 
            if (response.ok) {
                // Перенаправляем пользователя на страницу профиля
                window.location.href = 'http://127.0.0.1:5501/pages/admin_dashboard/admin-home.html';
            } else {
                console.error('Failed to fetch profile:', response.statusText);
            }
        })
}

