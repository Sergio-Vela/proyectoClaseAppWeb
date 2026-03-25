import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
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
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.userId = Number(id);
        this.loadProfile();
      }
    });
  }

  loadProfile() {
    this.profileService.getProfile(this.userId).subscribe(data => {
      console.log("DATA:", data);
      this.profile = data;
      this.cdr.detectChanges();
    });
  }

  enableEdit() {
    this.editMode = true;
  }

  save() {
    this.profileService.updateProfile(this.userId, this.profile.profile)
      .subscribe(() => {
        this.editMode = false;
        this.loadProfile();
      });
  }
}