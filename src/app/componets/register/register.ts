import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
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