import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MaterialService } from '../../services/material-service';
import { CategoryService } from '../../services/category-service';
import { CategoryDto } from '../../interfaces/category-dto';
import { MaterialDto } from '../../interfaces/material-dto';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {

  totalMateriales = 0;
  bajoStock = 0;
  totalCategorias = 0;

  constructor(
    private materialService: MaterialService,
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.materialService.getMaterials().subscribe((data: MaterialDto[]) => {
      this.totalMateriales = data.length;

      this.bajoStock = data.filter(m =>
        m.stockActual <= m.stockMinimo
      ).length;
      this.cdr.detectChanges();
    });

    this.categoryService.getCategories().subscribe((data: CategoryDto[]) => {
      this.totalCategorias = data.length;
      this.cdr.detectChanges();
    });
  }

}