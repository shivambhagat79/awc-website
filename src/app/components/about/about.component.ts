import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  carousel_index: string = 'F';
  interval_about: any;

  ngOnInit(): void {
    this.interval_about = setInterval(() => {
      this.carouselNext();
    }, 4000);
  }

  carouselNext() {
    const button = document.getElementById(this.carousel_index);
    button?.click();
    if (this.carousel_index === 'F') {
      this.carousel_index = 'G';
    } else if (this.carousel_index === 'G') {
      this.carousel_index = 'H';
    } else if (this.carousel_index === 'H') {
      this.carousel_index = 'I';
    } else if (this.carousel_index === 'I') {
      this.carousel_index = 'F';
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval_about);
  }
}
