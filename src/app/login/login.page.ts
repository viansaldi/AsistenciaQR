import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiClientService } from '../api-services/api-client.service';
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

  constructor(private router: Router, private api: ApiClientService, private sqlite: SqliteService) { }

  ngOnInit() {
    this.user = '';
    this.password = '';
    this.msgError = '';
    this.isAlertOpen = false;
    let users = [];
    this.api.getUsers().subscribe((data)=>{
      users = data;
    });

    this.sqlite.create('1-7','a','b','c').then((changes) => {
      console.log(changes);
      console.log("Created");
    }).catch( e => {
      console.log(e);
    });
  }

  logIn(): void{
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
