class User {
  #token = undefined
  #backend_url = "http://localhost:3001/users";

  constructor() {
    const userFromStorage = sessionStorage.getItem('accessToken')
    
    if (userFromStorage) {
        const userObject = JSON.parse(userFromStorage)
        this.#token = userObject
    }
  }

  get token() {
    return this.#token
  }

  isLoggedIn() {
    return this.#token !== undefined ? true : false
  }


    tryLogin = async(username, password)=>{
        console.log("TRYING TO LOGIN")
        const response = await fetch(this.#backend_url + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        
            if (response.ok === true) {
                const json = await response.json()
                this.#token = json.token
                sessionStorage.setItem('accessToken', JSON.stringify(json.token))
                return this
            } else {
                console.log("CAN NOT LOGIN")
                throw response.statusText
            }
    }

    checkToken = async() =>{
        const token = sessionStorage.getItem('accessToken');
        try {
            if (token) {
                const response = await fetch(this.#backend_url + '/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }); 
                if (response.ok) {
                    const data = await response.json();
                    return data;
                } else {
                    this.#token = undefined
                    sessionStorage.removeItem('accessToken')
                }
            } else {
                throw new Error('Access token not found in Session Storage');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error; // Пробросить ошибку для обработки в другом месте кода
        }

    }

    logout() {
        this.#token = undefined
        sessionStorage.removeItem('accessToken')
    }

    resetPassword = async(username, actualEmail)=>{
        try {
            const response = await fetch(this.#backend_url + '/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, email: actualEmail})
            });
            const responseData = await response.json();
            if (response.ok) {
                return responseData
            } else {
                throw new Error('Failed to suc ass');
            }
        } catch (error) {
            console.error('Failed to suc ass:', error);
            alert('Failed to succ ass');
        }
    }

    createNewPass = async(pass, token)=>{
        try {
            const response = await fetch(this.#backend_url + '/newpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password: pass, token: token})
            });
            const responseData = await response.json();
            if (response.ok) {
                return responseData
            } else {
                throw new Error('Failed to suc ass');
            }
        } catch (error) {
            console.error('Failed to suc ass:', error);
            alert('Failed to succ ass');
        }
    }

}

export { User }