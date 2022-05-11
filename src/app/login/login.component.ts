import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authent: AuthenticationService, private router: Router) {
    this.authent.disconnect();
    this.loginForm= new FormGroup({
      login : new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new  FormControl('', [Validators.required, checkPassword])
    })
  }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.loginForm)
    const user= this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
    if(user) this.router.navigateByUrl('home');
    console.log(user);
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
