class User {
  #username = undefined
  #user_type = undefined
  #backend_url = undefined

  constructor() {
    const userFromStorage = sessionStorage.getItem('user')
    if (userFromStorage) {
      const userObject = JSON.parse(userFromStorage)
      this.#username = userObject.username
      this.#user_type = userObject.user_type
      this.#backend_url = "http://localhost:3001/users";
    }
  }

  get username() {
    return this.#username
  }

  get user_type() {
    return this.#user_type
  }

  get isLoggedIn() {
    return this.#username !== undefined ? true : false
  }

  async login(email,password) {
    const data = JSON.stringify({email: email,password: password})
    const response = await fetch(BACKEND_URL + '/user/login',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: data
    })
    if (response.ok === true) {
      const json = await response.json()
      this.#username = json.id
      this.#user_type = json.email
      sessionStorage.setItem('user',JSON.stringify(json))
      return this
    } else {
      throw response.statusText
    }
  }

  async register(email,password) {
    const data = JSON.stringify({email: email,password: password})
    const response = await fetch(BACKEND_URL + '/user/register',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: data
    })
    if (response.ok === true) {
      const json = await response.json()
      return json.id
    } else {
      throw response.statusText
    }
  }

  logout() {
    this.#username = undefined
    this.#user_type = undefined
    sessionStorage.removeItem('user')
  }

}

export { User }