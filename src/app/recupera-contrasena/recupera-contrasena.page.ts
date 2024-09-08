import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.user = '';
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  recovery(): void {
    if(this.user.trim() == ''){
      this.msgError = 'El usuario es obligatorio';
      return;
    }
    this.msgError = 'Actualmente esta función no esta disponible.';
  }

}
