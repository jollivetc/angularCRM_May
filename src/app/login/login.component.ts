import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { User } from './model/user';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private subs :Subscription[]=[];

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

    const observable:Observable<User>= this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
    const subscription = observable.subscribe({
      next: (user:User)=>{ this.router.navigateByUrl('home')},
      error: (error:Error)=>{ alert('error au login') },
      complete: ()=>{ console.log('complete')}
    });
    this.subs.push(subscription);
  }

  ngOnDestroy(): void {
      this.subs.forEach(
        (sub:Subscription)=>{ sub.unsubscribe() }
      )
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
