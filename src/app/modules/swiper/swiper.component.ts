import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'crc-swiper',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template: `
    <img ngSrc="./../../../assets/banner.png" alt="slider_pic_1" width="10" height="306" priority style="width: 100%;">
  `,
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {}
