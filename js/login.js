import { User } from "./classes/user.js"
const user = new User();

const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', async(event)=>{
    console.log(usernameInput.value, passwordInput.value)
    event.preventDefault()
    const username = usernameInput.value
    const password = passwordInput.value

    try {
        const userData = await user.tryLogin(username, password);
        console.log(userData)

        const token = sessionStorage.getItem('accessToken');
        console.log(token);
    
        const message = await user.fetchProfile(token);
        console.log(message.message);
        
        switch(message.message){
            case 'admin':
                window.location.href = "http://127.0.0.1:5501/pages/admin_dashboard/admin-home.html";
                break;
            case 'customer':
                window.location.href = "http://127.0.0.1:5501/pages/customer_dashboard/customer_home.html";
                break;
            case 'employee':
                window.location.href = "http://127.0.0.1:5501/pages/employee_dashboard/employee_home.html";
                break;
            default:
                console.log('no role :(')
                break;
        }
    } catch (error) {
        alert(error);
    }
})

