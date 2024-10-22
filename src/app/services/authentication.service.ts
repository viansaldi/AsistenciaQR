import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login : boolean = false;
  userName = '';

  constructor() { }

  logIn(user: string, password: string) {
    if (user == 'admin' && password == '1234') {
      this.login = true;
      this.userName = user;
    } else {
      this.login = false;
    }
  }

  logOut() {
    this.login = false;
  }

  isLogged() {
    return this.login;
  }

}
