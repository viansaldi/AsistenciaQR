import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in', () => {
    expect(service.logIn('admin', '1234')).toBeTrue();
  });

  it('should not log in', () => {
    expect(service.logIn('admin', '12345')).toBeFalse();
  });
  
  it('should log out', () => {
    expect(service.logOut).toBeTruthy();
  });
});
