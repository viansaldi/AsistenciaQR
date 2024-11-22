import { CanActivateChildFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  
  if(authenticationService.isLogged()){
    return true;
  }
  else {
    const url = router.createUrlTree(['/login']);
    return url
  }

};
