import { Component, WritableSignal, inject, signal } from '@angular/core';
import { CategoryItem, TabEntity } from '../../common/interfaces';
import { SlotsCategories } from './slots-filter.entities';
import { CategoryFilterComponent } from 'src/app/shared/category-filter/category-filter.component';
import { SlotsProvidersFilterComponent } from 'src/app/shared/slots-providers-filter/slots-providers-filter.component';
import { SlotsService } from './infrastructure/slots.service';
import { take } from 'rxjs';

@Component({
  selector: 'crc-slots',
  standalone: true,
  imports: [
    CategoryFilterComponent,
    SlotsProvidersFilterComponent
  ],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent {
  private readonly slotsService = inject(SlotsService);

  readonly categories: CategoryItem[] = SlotsCategories;
  readonly $slotsProviders: WritableSignal<TabEntity[]> = signal([]);

  constructor () {
    this.slotsService.getCategories()
    .pipe(take(1))
    .subscribe((res) => {
      // i would implemented here manipulations to get unique categories and providers from games objects
    });
  }
}
