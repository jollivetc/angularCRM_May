import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './model/user';

interface AuthentificationResponse {
  user:User,
  token:string
}

const USER_KEY = 'angularCRM.user'
const TOKEN_KEY='angularCRM.token'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user?: User;
  private _token?:string;

  constructor(private http:HttpClient) {
    if(sessionStorage.getItem(USER_KEY)){
      this._user = JSON.parse(sessionStorage.getItem(USER_KEY)!);
      this._token=sessionStorage.getItem(TOKEN_KEY)!;
    }
  }

  authentUser(login:string, password:string):Observable<User>{
    return this.http.post<AuthentificationResponse>('/api/auth/login', {email:login, password:password})
              .pipe(
                map((response: AuthentificationResponse)=>{
                  this._user = response.user;
                  this._token = response.token;
                  sessionStorage.setItem(USER_KEY, JSON.stringify(this._user));
                  sessionStorage.setItem(TOKEN_KEY, this._token);
                  return this._user;
                })
              );
  }
  get user(): User | undefined{
    return this._user;
  }

  get token():string | undefined {
    return this._token;
  }

  disconnect(){
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    this._user=undefined;
    this._token=undefined;
  }
}
