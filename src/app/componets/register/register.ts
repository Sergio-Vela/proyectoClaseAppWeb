import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth';

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

  constructor(private authService: AuthService) { }

  register() {

    if (this.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const user = {
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.username,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: () => {
        alert("Usuario registrado correctamente");
      },
      error: (err) => {
        console.error(err);
        alert("Error al registrar");
      }
    });

  }

}