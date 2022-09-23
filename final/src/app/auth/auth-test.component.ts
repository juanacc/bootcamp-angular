import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth-test',
    templateUrl: './auth-test.component.html'
})
export class AuthTestComponent {
    title: string = 'Welcome to the recipe book';
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;

    onSubmit(form: NgForm) {
        console.log(form);
        form.reset();
    }
}