import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBirdsComponent } from './gallery-birds.component';

describe('GalleryBirdsComponent', () => {
  let component: GalleryBirdsComponent;
  let fixture: ComponentFixture<GalleryBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBirdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
