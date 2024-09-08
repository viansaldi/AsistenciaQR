import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: string;
  public password: string;
  public msgError: string;
  public isAlertOpen: boolean;
  public alertButtons = ['Aceptar'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = '';
    this.password = '';
    this.msgError = '';
    this.isAlertOpen = false;
  }

  logIn(): void{
    if(this.user.trim() == '' || this.password.trim() == ''){
      this.setOpen(true);
      this.msgError = 'El usuario y la contraseña son de carácter obligatorio'
      return;  
    }
    if(this.user != 'admin' && this.password != '1234'){
      this.setOpen(true);
      this.msgError = 'Usuario y/o contraseña invalidos'
      return;
    } else {
      this.navigateToHome();
    }
  }

  navigateToRecovery(): void {
    this.router.navigate(['recupera-contrasena']);
  }

  private navigateToHome(): void {

  }
  
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
}
