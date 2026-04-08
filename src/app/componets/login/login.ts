import { Component, inject, OnInit } from '@angular/core';
import { LoginInter } from '../../interfaces/login-dt';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor (private router: Router) {}

  login() {
    if (this.username !== '' && this.password !== '') {

      const objectRequest = {
        usuario: this.username,
        password: this.password
      };

      this.loginService.doLogin(objectRequest).subscribe({
        next: (res) => {

          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));

          console.log('Login exitoso', res);
          
          const user = JSON.parse(localStorage.getItem('user') || '{}');
          if (user.id) {
            this.router.navigate(['/profile/'+ user.id]);  
          }

        },
        error: (err) => {
          console.error(err);
          alert("Credenciales incorrectas");
        }
      });
    }
  }

}
