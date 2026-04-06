import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MaterialDto } from '../../interfaces/material-dto';
import { MaterialService } from '../../services/material-service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialDialogComponent } from '../material-dialog/material-dialog';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {

  materials: MaterialDto[] = [];

  constructor(private materialService: MaterialService, private dialog: MatDialog) { }

  ngOnInit() {
    console.log("Inventory cargado");
    this.loadMaterials();
  }

  loadMaterials() {
    this.materialService.getMaterials().subscribe((data: MaterialDto[]) => {
      this.materials = [...data];
    });
  }

  deleteMaterial(id: number) {
    this.materialService.deleteMaterial(id).subscribe(() => {
      this.loadMaterials();
    });
  }

  addMaterial() {
    const dialogRef = this.dialog.open(MaterialDialogComponent, {
      width: '400px',
      data: null // porque es nuevo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.materialService.createMaterial(result).subscribe(() => {
          this.loadMaterials();
        });
      }
    });
  }

  editMaterial(mat: MaterialDto) {
    const dialogRef = this.dialog.open(MaterialDialogComponent, {
      width: '400px',
      data: mat // le pasas el material actual
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.materialService.updateMaterial(mat.id, result).subscribe(() => {
          this.loadMaterials();
        });
      }
    });
  }

}