import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-gallery-nav',
  templateUrl: './gallery-nav.component.html',
  styleUrls: ['./gallery-nav.component.css'],
})
export class GalleryNavComponent implements OnInit {
  activeIndex: number = 1;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/gallery/all') {
          this.activeIndex = 1;
        } else if (event.url === '/gallery/birds') {
          this.activeIndex = 2;
        } else if (event.url === '/gallery/dogs') {
          this.activeIndex = 3;
        } else if (event.url === '/gallery/squirrels') {
          this.activeIndex = 4;
        } else if (event.url === '/gallery/faunalfriendships') {
          this.activeIndex = 5;
        }

        console.log(this.activeIndex);
      }
    });
  }
}
