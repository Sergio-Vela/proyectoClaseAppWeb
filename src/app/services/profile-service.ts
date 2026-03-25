import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/api/profiles';

  constructor(private http: HttpClient) {}

  getProfile(userId: number) {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  updateProfile(userId: number, data: any) {
    return this.http.put(`${this.apiUrl}/${userId}`, data);
  }
}
