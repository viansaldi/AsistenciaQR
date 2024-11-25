import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaContrasenaPage } from './recupera-contrasena.page';

describe('RecuperaContrasenaPage', () => {
  let component: RecuperaContrasenaPage;
  let fixture: ComponentFixture<RecuperaContrasenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect', () => {
    expect(component.navigateToLogin).toBeTruthy();
  });

  it('should user be empty', () => {
    expect(component.user).toEqual('');
  });

  it('should msgError be undefined', () => {
    expect(component.msgError).toBeUndefined();
  });
});
