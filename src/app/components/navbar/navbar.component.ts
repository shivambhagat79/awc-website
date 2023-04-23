import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;
  activeIndex: number = 1;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home') {
          this.onClick(1);
        } else if (event.url === '/initiatives') {
          this.onClick(2);
        } else if (event.url === '/gallery') {
          this.onClick(3);
        } else if (event.url === '/donation') {
          this.onClick(4);
          this.isScrolled = true;
        }
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  onHoverIn(index: number) {
    const dot = document.getElementById('dot');
    for (let i = 1; i <= 6; i++) {
      dot?.classList.remove('active-link-'.concat(i.toString()));
    }
    dot?.classList.add('active-link-'.concat(index.toString()));
  }

  onHoverOut(index: number) {
    if (this.activeIndex != index) {
      const dot = document.getElementById('dot');
      dot?.classList.remove('active-link-'.concat(index.toString()));
      dot?.classList.add('active-link-'.concat(this.activeIndex.toString()));
    }
  }

  onClick(index: number) {
    const dot = document.getElementById('dot');
    const navLinks = document.getElementsByClassName('nav-link');

    dot?.classList.remove('active-link-'.concat(this.activeIndex.toString()));
    dot?.classList.add('active-link-'.concat(index.toString()));

    navLinks[this.activeIndex - 1].classList.remove('active-nav');
    navLinks[index - 1].classList.add('active-nav');

    this.activeIndex = index;
  }

  onFAQButtonClicked() {
    window.location.href = '#FAQs';
  }
}
