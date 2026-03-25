import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginInter } from '../interfaces/login-dt';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor() { }

  doLogin(input: LoginInter): Observable<boolean> {
    return of(true)
  }

}
