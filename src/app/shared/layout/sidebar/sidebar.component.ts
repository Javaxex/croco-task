import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common'
import { GLOBAL_MENU_ITEMS } from '../../../data/menu-items';
import { GlobalMenuItem } from '../../../common/interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'crc-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly menuItems: GlobalMenuItem[] = GLOBAL_MENU_ITEMS;
}
