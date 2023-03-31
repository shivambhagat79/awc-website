import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
}
