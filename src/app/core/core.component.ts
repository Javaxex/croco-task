import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SwiperComponent } from '../modules/swiper/swiper.component';

@Component({
  selector: 'crc-core',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    SwiperComponent,
    RouterOutlet
  ],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
  }
}
