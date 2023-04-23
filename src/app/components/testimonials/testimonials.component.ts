import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  carousel_index: string = 'A';
  interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.carouselNext();
    }, 5000);
  }

  carouselNext() {
    const button = document.getElementById(this.carousel_index);
    button?.click();
    if (this.carousel_index === 'A') {
      this.carousel_index = 'B';
    } else if (this.carousel_index === 'B') {
      this.carousel_index = 'C';
    } else if (this.carousel_index === 'C') {
      this.carousel_index = 'D';
    } else if (this.carousel_index === 'D') {
      this.carousel_index = 'A';
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
