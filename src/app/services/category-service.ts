import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDto } from '../interfaces/category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:3000/api/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<CategoryDto[]>(this.apiUrl);
  }

}