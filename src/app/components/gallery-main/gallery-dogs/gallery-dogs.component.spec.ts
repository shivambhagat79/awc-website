import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDogsComponent } from './gallery-dogs.component';

describe('GalleryDogsComponent', () => {
  let component: GalleryDogsComponent;
  let fixture: ComponentFixture<GalleryDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
