import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid)
            return;
        const email = form.value.email;
        const password = form.value.password;

        let authObs = new Observable<AuthResponseData>;

        this.isLoading = true;

        authObs = this.isLoginMode ? this.authService.login(email, password) : this.authService.signUp(email, password);

        authObs.subscribe(resp => {
            console.log(resp);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });

        form.reset();
    }

    onHandlerError() {
        this.error = null;
    }
}