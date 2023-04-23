import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAllComponent } from './gallery-all.component';

describe('GalleryAllComponent', () => {
  let component: GalleryAllComponent;
  let fixture: ComponentFixture<GalleryAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
