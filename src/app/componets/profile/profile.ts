import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  profile: any = {};
  editMode = false;
  userId!: number;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.userId = Number(id);
      } else {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        this.userId = user.id;
      }

      if (this.userId) {
        this.loadProfile();
      }
    });
  }

  loadProfile() {
    this.profileService.getProfile(this.userId).subscribe(data => {
      console.log("DATA:", data);
      this.profile = data || {};
      this.cdr.detectChanges();
    });
  }

  enableEdit() {
    this.editMode = true;
  }

  save() {
    // 1. actualizar profile
    this.profileService.updateProfile(this.userId, this.profile.profile)
      .subscribe(() => {

        // 2. actualizar user
        this.profileService.updateUser(this.userId, {
          nombre: this.profile.nombre,
          apellido: this.profile.apellido,
          usuario: this.profile.usuario
        }).subscribe(() => {
          this.editMode = false;
          this.loadProfile();
        });

      });
  }
}