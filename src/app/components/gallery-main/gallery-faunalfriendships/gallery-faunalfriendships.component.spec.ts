import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFaunalfriendshipsComponent } from './gallery-faunalfriendships.component';

describe('GalleryFaunalfriendshipsComponent', () => {
  let component: GalleryFaunalfriendshipsComponent;
  let fixture: ComponentFixture<GalleryFaunalfriendshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryFaunalfriendshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryFaunalfriendshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
