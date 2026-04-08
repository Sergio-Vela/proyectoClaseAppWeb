import { Component } from '@angular/core';
import { HeaderService } from '../../services/header-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HeaderDto } from '../../interfaces/header-dto';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

  headers: HeaderDto[] = [];
  userId: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit() {

    this.loadUser();

    // 🔥 clave: detectar cambios de navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadUser();
      });

    this.headerService.getHeaders().subscribe(data => {
      this.headers = data;
    });
  }

  loadUser() {
    const userStr = localStorage.getItem('user');

    if (userStr) {
      const user = JSON.parse(userStr);
      this.userId = user.id;
      this.isLoggedIn = true;
    } else {
      this.userId = 0;
      this.isLoggedIn = false;
    }
  }

  getRoute(ruta: string) {
    if (ruta === '/profile' && this.userId) {
      return ['/profile', this.userId];
    }
    return [ruta];
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.isLoggedIn = false;
    this.userId = 0;

    this.router.navigate(['/login']);
  }

}