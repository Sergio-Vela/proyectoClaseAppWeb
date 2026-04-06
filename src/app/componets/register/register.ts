import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  nombre = '';
  apellido = '';
  username = '';
  password = '';
  confirmPassword = '';

  register(){

    if(this.password !== this.confirmPassword){
      alert("Las contraseñas no coinciden");
      return;
    }

    const user = {
      nombre: this.nombre,
      apellido: this.apellido,
      username: this.username,
      password: this.password
    };

    localStorage.setItem('registeredUser', JSON.stringify(user));

   alert("Usuario registrado correctamente");
  }

}