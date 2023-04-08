import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css'],
})
export class GalleryMainComponent {
  birds: string[] = Array.from({ length: 15 }, (_, i) => i + 1).map((e) => {
    return '../../../assets/images/gallery/birds/birds-'
      .concat(e.toString())
      .concat('.jpg');
  });
  dogs: string[] = Array.from({ length: 15 }, (_, i) => i + 1).map((e) => {
    return '../../../assets/images/gallery/dogs/dogs-'
      .concat(e.toString())
      .concat('.jpg');
  });
  squirrels: string[] = Array.from({ length: 15 }, (_, i) => i + 1).map((e) => {
    return '../../../assets/images/gallery/squirrels/squirrels-'
      .concat(e.toString())
      .concat('.jpg');
  });
  faunalfriendships: string[] = Array.from({ length: 15 }, (_, i) => i + 1).map(
    (e) => {
      return '../../../assets/images/gallery/faunalfriendships/faunalfriendships-'
        .concat(e.toString())
        .concat('.jpg');
    }
  );

  numCols: number[] = [1, 2, 3, 4];
  mainArray: string[] = this.birds;

  col1: string[] = this.mainArray.slice(0, 2);
  col2: string[] = this.mainArray.slice(2, 4);
  col3: string[] = this.mainArray.slice(4, 6);
  col4: string[] = this.mainArray.slice(6, 8);

  col(n: number): string[] {
    if (n === 1) {
      return this.col1;
    } else if (n === 2) {
      return this.col2;
    } else if (n === 3) {
      return this.col3;
    } else if (n === 4) {
      return this.col4;
    } else {
      return this.col1;
    }
  }
}
