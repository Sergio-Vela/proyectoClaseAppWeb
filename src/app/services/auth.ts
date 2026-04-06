import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) { }

  //dejaré any de momento, luego le haré su dto
  register(data: any) {
    console.log(data);
    return this.http.post(this.apiUrl, data);
  }

}
