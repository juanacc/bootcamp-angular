import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  projectTaskForm: FormGroup;
  forbiddenUsername = ['juan', 'pedro'];
  buttonTitle: string = 'Hide statement';
  showStatement: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.signupForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });

    this.projectTaskForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.forbiddenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstate': new FormControl(null)
    })

    this.signupForm.setValue({
      userData: {
        username: 'Juan',
        email: 'juan@juan.com'
      },
      gender: 'male',
      hobbies: []
    });

    this.signupForm.patchValue({
      userData: {
        username: 'Pedro',
      },
    });
  }

  submitForm() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    //console.log('CONTROL VALUE: ', control.value.toLowerCase());
    //console.log(control);
    const controlValue = control.value ? control.value.toLowerCase() : '';
    //console.log('CONTROL VALUE: ', controlValue);
    return (this.forbiddenUsername.indexOf(controlValue) !== -1) ? { 'nameIsForbidden': true } : null
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === 'test@test.com' ? resolve({ 'emailIsForbidden': true }) : resolve(null)
      }, 1500)
    })
  }

  showDescription() {
    this.showStatement = !this.showStatement;
    this.buttonTitle = this.showStatement ? 'Hide statement' : 'Show statement';
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        (control.value).toLowerCase() === 'test' ? resolve({ 'projectNameIsForbidden': true }) : resolve(null)
      }, 1500)
    })
  }

  submitFormTask() {
    console.log(this.projectTaskForm);
  }

}
