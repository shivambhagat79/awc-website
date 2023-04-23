import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySquirrelsComponent } from './gallery-squirrels.component';

describe('GallerySquirrelsComponent', () => {
  let component: GallerySquirrelsComponent;
  let fixture: ComponentFixture<GallerySquirrelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySquirrelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySquirrelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
