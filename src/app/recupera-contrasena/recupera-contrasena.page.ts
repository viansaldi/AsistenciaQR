import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recupera-contrasena',
  templateUrl: './recupera-contrasena.page.html',
  styleUrls: ['./recupera-contrasena.page.scss'],
})
export class RecuperaContrasenaPage implements OnInit {

  public user: string;
  public msgError: string;
  public isAlertOpen: boolean;
  public alertButtons = ['Aceptar'];

  constructor(private router:Router) { }

  ngOnInit() {
    this.user = '';
    this.isAlertOpen = false;
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  recovery(): void {
    if(this.user.trim() == ''){
      this.msgError = 'El usuario es obligatorio';
      this.setOpen(true);
      return;
    }
    this.msgError = 'Actualmente esta función no esta disponible.';
    this.setOpen(true);
  }
  
  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

}
