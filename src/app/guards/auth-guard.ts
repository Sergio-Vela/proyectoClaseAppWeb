import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { FakeAuth } from '../services/fake-auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(FakeAuth);
  const router = inject(Router);

  if (auth.isLogged()){
    return true;
  }

  router.navigate(['/login']);
  return false;

};
