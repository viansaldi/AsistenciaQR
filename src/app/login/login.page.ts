import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SqliteService } from '../services/sqlite.service';
import { Storage } from '@ionic/storage-angular';
import { AuthenticationService } from '../services/authentication.service';

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

  constructor(private router: Router, private sqlite: SqliteService, private storage: Storage, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.storage.create();
    this.user = '';
    this.password = '';
    this.msgError = '';
    this.isAlertOpen = false;
    if(this.authenticationService.isLogged()){
      this.router.navigate(['/home']);
    }
  }

  logIn(): void {
    const date = new Date();
    this.sqlite.create(this.user,date.toString()).then((changes) => {
      console.log(changes);
      console.log("Created");
    }).catch( e => {
      console.log(e);
    });
    if(this.user.trim() == '' || this.password.trim() == ''){
      this.setOpen(true);
      this.msgError = 'El usuario y la contraseña son de carácter obligatorio'
      return;  
    }
    if(this.authenticationService.logIn(this.user, this.password)){
      let u = { user: this.user, password: this.password};
      let navigationExtras: NavigationExtras = {
        state: {
          user: {user: this.user, password: this.password
          }
        }
      };
      this.storage.set('user', u);
      this.router.navigate(['/home'],navigationExtras);
    } else {
      this.setOpen(true);
      this.msgError = 'Usuario y/o contraseña invalidos'
      return;
    }
  }

  navigateToRecovery(): void {
    this.router.navigate(['recupera-contrasena']);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
}
