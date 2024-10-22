import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login : boolean = false;
  userName = '';

  constructor() { }

  logIn(user: string, password: string): boolean {
    if (user == 'admin' && password == '1234') {
      this.login = true;
      this.userName = user;
      return true;
    } else {
      this.login = false;
      return false;
    }
  }

  logOut() {
    this.login = false;
  }

  isLogged() {
    return this.login;
  }

}
