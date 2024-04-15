const BACKEND_ROOT_URL = "http://localhost:3001/customers/account/new";
const signupButton = document.querySelector('#signup-form-button');

signupButton.addEventListener('click', () => {
    const username = document.getElementById('signup-form-username').value;
    const password = document.getElementById('signup-form-password').value;
    const confirm_password = document.getElementById('signup-form-confirm-password').value;
    const firstname = document.getElementById('signup-form-firstname').value;
    const lastname = document.getElementById('signup-form-lastname').value;
    const email = document.getElementById('signup-form-email').value;
    const phone = document.getElementById('signup-form-phone').value;

    // check if any of the fields are empty
    if (username === '' || password === '' || confirm_password === '' || firstname === '' || lastname === '' || email === '' || phone === '') {
        alert('Please fill all the fields')
        return
    }
    // check if the passwords match
    if (password !== confirm_password) {
        alert('Passwords do not match!')
        return
    }

    // customer object
    const customer = {
        username: username,
        password: password,
        confirm_password: confirm_password,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone
    };

    
    createCustomerAccount(customer).then(result => {
        console.log(result)
        // redirect to login page
        document.getElementById('staticBackdropLabel').innerText = 'Login'; // Change modal title to Login
        document.getElementById('signupContent').style.display = 'none'; // Hide signup content
        document.getElementById('loginContent').style.display = 'block'; // Show login content
        document.getElementById('loginFooter').style.display = 'block'; // Show login footer
        document.getElementById('signupFooter').style.display = 'none'; // Hide signup footer
        alert('Account created successfully!')
    }).catch(error => {
        console.error(error)
        alert('Account creation failed!')
    })
    
});


// function to send a POST request to the backend
const createCustomerAccount = async (customer) => {
    return new Promise(async(resolve, reject)=> {
        fetch(BACKEND_ROOT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(json => {
          resolve(json)
        }),(error) => {
          reject(error)
        }
      })
}
