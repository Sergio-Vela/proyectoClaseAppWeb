import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialDto } from '../../interfaces/material-dto';

@Component({
  selector: 'app-material-dialog',
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './material-dialog.html',
  styleUrl: './material-dialog.css',
})

export class MaterialDialogComponent {

  material: MaterialDto;

  categorias = [
    { id: 1, nombre: 'Desechables' },
    { id: 2, nombre: 'Medicamentos' },
    { id: 3, nombre: 'Restauración' },
    { id: 4, nombre: 'Desinfección' }
  ];

  constructor(
    public dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MaterialDto
  ) {
    // si viene data = editar, si no = crear
    this.material = data ? { ...data } : {
      id: 0,
      nombre: '',
      descripcion: '',
      categoriaId: 1,
      stockActual: 0,
      stockMinimo: 0,
      unidadMedida: ''
    };
  }

  save() {
    this.dialogRef.close(this.material);
  }

  close() {
    this.dialogRef.close();
  }

}
