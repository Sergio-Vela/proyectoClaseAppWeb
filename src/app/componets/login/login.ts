import { Component, inject, OnInit } from '@angular/core';
import { LoginInter } from '../../interfaces/login-dt';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule],
  styleUrl: './login.css',
})
export class LoginComponent {

  private loginService = inject(LoginService);

  username: string = '';
  password: string = '';

  login(){
    console.log('Usuario:', this.username);
    console.log('Password:', this.password);
    
    if (this.username !== '' && this.password !== '') {
      const objectRequest: LoginInter = {
        username: this.username,
        password: this.password
      };

      this.loginService.doLogin(objectRequest).subscribe(entry => {
        if (entry) {
          console.log('Login exitoso:', entry);
        } else {
          console.log('Login fallido');
        }
      });
    }
  
  }
}
