export class AuthService {
    loggedIn = false;

    isAuthenticate() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        })
    }

    login() {
        this.loggedIn = !this.loggedIn;
    }

    logout() {
        this.loggedIn = !this.loggedIn;
    }
}