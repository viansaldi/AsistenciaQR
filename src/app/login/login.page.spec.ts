import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { provideHttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Capacitor } from '@capacitor/core';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient(), Storage]});
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user should be empty', () => {
    var r = component.user == '' && component.password == '';
    expect(r).toBeTrue();
  });

  it('should valid if is native platform', () => {
    expect(Capacitor.isNativePlatform()).toBeFalse();
  });

  it('should valid if msgError is empty', () => {
    expect(component.msgError == '').toBeTrue();
  });
});
