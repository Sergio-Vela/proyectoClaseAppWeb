import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDialogComponent } from './material-dialog';

describe('MaterialDialogComponent', () => {
  let component: MaterialDialogComponent;
  let fixture: ComponentFixture<MaterialDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
