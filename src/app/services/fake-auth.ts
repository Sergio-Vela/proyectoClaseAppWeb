import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeAuth {
  
  login(user: string, pass: string): boolean {

    if(user === 'admin' && pass === 'admin'){
      localStorage.setItem('user','admin');
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('user');
  }

  isLogged(): boolean{
    return localStorage.getItem('user') !== null;
  }
}
