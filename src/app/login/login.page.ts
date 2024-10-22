import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
//import { Storage } from '@ionic/storage-angular';
import { SqliteService } from '../services/sqlite.service';

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

  constructor(private router: Router, private sqlite: SqliteService, private storage: Storage) { }

  ngOnInit() {
    //this.storage.create();
    this.user = '';
    this.password = '';
    this.msgError = '';
    this.isAlertOpen = false;
  }

  logIn(): void {
    if(this.user.trim() == '' || this.password.trim() == ''){
      this.setOpen(true);
      this.msgError = 'El usuario y la contraseña son de carácter obligatorio'
      return;  
    }
    if(this.user == 'admin' && this.password == '1234'){
      this.navigateToHome();
    } else {
      this.setOpen(true);
      this.msgError = 'Usuario y/o contraseña invalidos'
      return;
    }
  }

  navigateToRecovery(): void {
    this.router.navigate(['recupera-contrasena']);
  }

  private navigateToHome(): void {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.router.navigate(['home'], navigationExtras);
  }
  
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
}
