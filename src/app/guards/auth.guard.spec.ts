import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should be call', () => {
    expect(executeGuard.call).toBeTruthy();
  });
  
  it('should be call', () => {
    expect(executeGuard.call).toBeTruthy();
  });

  it('should be apply', () => {
    expect(executeGuard.apply).toBeTruthy();
  });
});
