import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabEntity } from 'src/app/common/interfaces';

@Component({
  selector: 'crc-slots-providers-filter',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './slots-providers-filter.component.html',
  styleUrls: ['./slots-providers-filter.component.scss']
})
export class SlotsProvidersFilterComponent {
  @Input({ required: true }) providers?: TabEntity[];
}
