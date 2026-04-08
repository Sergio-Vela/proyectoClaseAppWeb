import { Component } from '@angular/core';
import { HeaderService } from '../../services/header-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderDto } from '../../interfaces/header-dto';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  headers: HeaderDto[] = [];
  userId: number = 0;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')!)
    this.userId = user?.id || 0;

    this.headerService.getHeaders().subscribe(data => {
      this.headers = data;
    });
  }

  getRoute(ruta: string) {
    if (ruta === '/profile') {
      return ['/profile', this.userId];
    }
    return [ruta];
  }

}
