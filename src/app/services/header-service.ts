import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderDto } from '../interfaces/header-dto';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  private apiUrl = 'http://localhost:3000/api/headers';

  constructor(private http: HttpClient) { }

  getHeaders() {
    return this.http.get<HeaderDto[]>(this.apiUrl);
  }
}