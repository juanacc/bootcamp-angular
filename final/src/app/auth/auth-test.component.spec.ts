import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthTestComponent } from '../auth/auth-test.component';

describe('AuthComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AuthTestComponent],
            providers: []
        }).compileComponents();
    })

    it('Should create the AuthComponent', () => {
        const fixture = TestBed.createComponent(AuthTestComponent);
        const auth = fixture.componentInstance;
        expect(auth).toBeTruthy();
    });

    it('Should have as title "Welcome to the recipe book"', () => {
        const fixture = TestBed.createComponent(AuthTestComponent);
        const auth = fixture.componentInstance;
        expect(auth.title).toBeTruthy();
        expect(auth.title).toEqual('Welcome to the recipe book');
    });

    it('Should have a variable called "isLoginMode" with value "true" as default', () => {
        const fixture = TestBed.createComponent(AuthTestComponent);
        const auth = fixture.componentInstance;
        expect(auth.isLoginMode).toBeTruthy();
        expect(auth.isLoginMode).toEqual(true);
    });

    it('Should have a variable called "isLoginMode" with value "true" as default', () => {
        const fixture = TestBed.createComponent(AuthTestComponent);
        const auth = fixture.componentInstance;
        expect(auth.isLoginMode).toEqual(true);
    });

    it('Should have a label above the input email called "E-Mail"', () => {
        const fixture = TestBed.createComponent(AuthTestComponent);
        fixture.detectChanges();
        const compiledDOM = fixture.nativeElement;
        expect(compiledDOM.querySelector('.email-label label').textContent).toContain('E-Mail')
    });

    it('Should have a label above the input password called "Password"', () => {
        const fixture = TestBed.createComponent(AuthTestComponent);
        fixture.detectChanges();
        const compiledDOM = fixture.nativeElement;
        expect(compiledDOM.querySelector('.password-label label').textContent).toContain('Password')
    });
})