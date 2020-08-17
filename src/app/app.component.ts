import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '../../projects/ngx-gallery/src';
import {fadeAnimation} from './app-routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewBullets: true,
        previewZoom: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewBullets: true,
        previewZoom: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        previewBullets: true,
        previewZoom: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/thumb/img3.jpg',
        medium: 'assets/img/thumb/img3.jpg',
        big: 'assets/img/img3.jpg'
      },
      {
        small: 'assets/img/thumb/img4.jpg',
        medium: 'assets/img/thumb/img4.jpg',
        big: 'assets/img/img4.jpg'
      },
      {
        small: 'assets/img/thumb/img11.jpg',
        medium: 'assets/img/thumb/img11.jpg',
        big: 'assets/img/img11.jpg'
      }
    ];
  }
}
