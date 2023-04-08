import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  imageURL: string = '../../../assets/images/home/header-bg.jpg';
  isLoading: boolean = true;

  ngAfterViewInit(): void {
    this.isLoading = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset < 1200) {
      this.imageURL = '../../../assets/images/home/header-bg.jpg';
    } else {
      this.imageURL = '../../../assets/images/home/testimonials-bg.jpg';
    }
  }
}
