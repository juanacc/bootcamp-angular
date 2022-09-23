import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { environment } from '../../environments/environment';

export interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registerd?: boolean,
}

const errorsType = {
    'EMAIL_EXISTS': 'This email exists already',
    'INVALID_PASSWORD': 'Invalid username or password',
    'EMAIL_NOT_FOUND': 'Invalid username or password',
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    apiKey = environment.firebaseAPIKey;
    loginStr = 'signInWithPassword';
    signUpStr = 'signUp';
    urlBase: string = 'https://identitytoolkit.googleapis.com/v1/accounts'
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    // errorsType = {
    //     'EMAIL_EXISTS': 'This email exists already'
    //     //'INVALID_PASSWORD': 'Invalid username or password',
    //     //'EMAIL_NOT_FOUND': 'Invalid username or password',
    // }


    constructor(private http: HttpClient, private router: Router) { }

    signUp(email: string, password: string) {
        const registerInfo = {
            email,
            password,
            returnSecureToken: true
        };
        const url = `${this.urlBase}:${this.signUpStr}?key=${this.apiKey}`;

        return this.http.post<AuthResponseData>(url, registerInfo)
            .pipe(catchError(this.handleError), tap(respData => this.handleAuthentication(respData.email, respData.localId, respData.idToken, parseInt(respData.expiresIn))))
    }

    login(email: string, password: string) {
        const loginInfo = {
            email,
            password,
            returnSecureToken: true
        };

        //console.log('ERRORS-type', errorsType);

        const url = `${this.urlBase}:${this.loginStr}?key=${this.apiKey}`;
        return this.http.post<AuthResponseData>(url, loginInfo)
            .pipe(catchError(this.handleError), tap(respData => this.handleAuthentication(respData.email, respData.localId, respData.idToken, parseInt(respData.expiresIn))));
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) return;
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        };
    }

    logout() {
        this.user.next(null);
        localStorage.removeItem('userData');
        this.router.navigate(['/auth']);
        if (this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration)
    }

    private handleAuthentication(email: string, localId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, localId, token, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogout(expiresIn * 1000);
    }

    private handleError(errorRes: HttpErrorResponse) {
        //console.log('ERROR-RES', errorRes.error.error.message);
        //console.log('ERRORS-type', errorsType);
        let errorMessage = 'An unknown error occurred';
        errorMessage = errorsType[errorRes.error.error.message] || errorMessage;
        return throwError(errorMessage);
    }
}