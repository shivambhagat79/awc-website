import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-squirrels.component.html',
  styleUrls: ['./gallery-squirrels.component.css'],
})
export class GallerySquirrelsComponent {
  squirrels: string[] = Array.from({ length: 6 }, (_, i) => i + 1).map((e) => {
    return 'assets/images/gallery/squirrels/squirrels-'
      .concat(e.toString())
      .concat('.jpg');
  });

  numCols: number[] = [1, 2, 3, 4];
  mainArray: string[] = this.squirrels;
  cols: number = this.numCols.length;
  totalImages: number = this.mainArray.length;
  imagesInOneCOl: number = this.totalImages / this.cols;

  col1: string[] = this.mainArray.slice(0, this.imagesInOneCOl);
  col2: string[] = this.mainArray.slice(
    this.imagesInOneCOl,
    2 * this.imagesInOneCOl
  );
  col3: string[] = this.mainArray.slice(
    2 * this.imagesInOneCOl,
    3 * this.imagesInOneCOl
  );
  col4: string[] = this.mainArray.slice(
    3 * this.imagesInOneCOl,
    4 * this.imagesInOneCOl
  );

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