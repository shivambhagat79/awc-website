import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentPage: string = 'home';

  constructor(private router: Router) {
    if (router.url === '/home') {
      this.currentPage = 'home';
    } else if (router.url === '/gallery/all') {
      this.currentPage = 'gallery';
    }
  }

  onHoverIn() {
    const elements = document.querySelectorAll('.hover');
    elements.forEach((element) => {
      element.classList.remove('text-white', 'border-white');
      element.classList.add('text-danger', 'border-danger');
    });
  }

  onHoverOut() {
    const elements = document.querySelectorAll('.hover');
    elements.forEach((element) => {
      element.classList.remove('text-danger', 'border-danger');
      element.classList.add('text-white', 'border-white');
    });
  }

  onDonateButtonClicked() {
    this.router.navigate(['donation']);
  }
}
