import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm= new FormGroup({
      login : new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new  FormControl('', [Validators.required, checkPassword])
    })
  }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.loginForm)
  }
  shouldShowErrors():false |ValidationErrors|undefined|null{
    return this.loginForm.get('login')?.touched && this.loginForm.get('login')?.errors;
  }
}

function checkPassword(c: AbstractControl): ValidationErrors | null {
  if(c.value.length < 5){
    return {
      checkPassword:'password should be 5 characteres at least'
    }
  }
  return null;
}
