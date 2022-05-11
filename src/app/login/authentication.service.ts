import { Injectable } from '@angular/core';
import { User } from './model/user';


const USER_KEY = 'angularCRM.user'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user?: User;

  constructor() {
    if(sessionStorage.getItem(USER_KEY)){
      this._user = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    }
  }

  authentUser(login:string, password:string):User{
    this._user = {
      userId: 1,
      login : login,
      lastname: 'Doe',
      firstname: 'John'
    }
    sessionStorage.setItem(USER_KEY, JSON.stringify(this._user))
    return this._user;
  }
  get user(): User | undefined{
    return this._user;
  }

  disconnect(){
    sessionStorage.removeItem(USER_KEY);
    this._user=undefined;
  }
}
