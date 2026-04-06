import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaterialDto } from '../interfaces/material-dto';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {
  
  private apiUrl = 'http://localhost:3000/api/materials';

  constructor(private http: HttpClient) { }

  getMaterials() {
    return this.http.get<MaterialDto[]>(this.apiUrl)
  }

  deleteMaterial(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createMaterial(data: MaterialDto) {
    return this.http.post<MaterialDto>(this.apiUrl, data);
  }

  updateMaterial(id: number, data: MaterialDto) {
    return this.http.put<MaterialDto>(`${this.apiUrl}/${id}`, data);
  }
}
