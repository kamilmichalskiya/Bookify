class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(email, password, callback) {
    if (email === 'admin@admin.com' && password === 'semafor') {
      this.authenticated = true;
      callback();
    } else {
      console.warn('Incorrect admin credentials!');
    }
  }

  logout(callback) {
    this.authenticated = false;
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
