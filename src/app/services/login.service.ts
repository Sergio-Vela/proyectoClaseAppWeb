import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  doLogin(input: any) {
    return this.http.post<any>(this.apiUrl, input);
  }
}