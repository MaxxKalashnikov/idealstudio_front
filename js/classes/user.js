class User {
//   #username = undefined
//   #user_type = undefined
  #token = undefined
  #backend_url = "http://localhost:3001/users";

  constructor() {
    const userFromStorage = sessionStorage.getItem('accessToken')
    if (userFromStorage) {
        const userObject = JSON.parse(userFromStorage)
        this.#token = userObject.token
    //   this.#username = userObject.username
    //   this.#user_type = userObject.user_type
        
    }
  }

  get token() {
    return this.#token
  }

  get isLoggedIn() {
    return this.#token !== undefined ? true : false
  }


    tryLogin = async(username, password)=>{
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
                throw response.statusText
            }
    }

    fetchProfile = async(token) =>{
    
        if (token) {
            fetch(this.#backend_url + '/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            console.error('Access token not found in Session Storage');
        }
    }

  logout() {
    this.#token = undefined
    sessionStorage.removeItem('accessToken')
  }

}

export { User }