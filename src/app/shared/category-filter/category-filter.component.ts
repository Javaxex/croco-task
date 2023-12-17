import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CategoryItem } from '../../common/interfaces';
import { TrackByPropDirective } from '../track-by/track-by-prop/track-by-prop.directive';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'crc-category-filter',
  standalone: true,
  imports: [
    NgFor,
    TrackByPropDirective,
    RouterLink,
  ],
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilterComponent {
  activeTab: string = '';

  @Input({ required: true }) items?: CategoryItem[];

  constructor(
    private readonly router: Router,
    private readonly destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeTab = event.urlAfterRedirects;
      }
    });
  }

  // TODO: create shared pipe for it
  public isActive(item: CategoryItem): boolean {
    return this.activeTab === `/${ item.name }`;
  }
}
