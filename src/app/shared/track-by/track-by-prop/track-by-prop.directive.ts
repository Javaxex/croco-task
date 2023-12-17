import { NgForOf } from '@angular/common';
import { Directive, Input, NgIterable, inject } from '@angular/core';

@Directive({
  selector: '[trackByProp]',
  standalone: true
})
export class TrackByPropDirective<T> {

  @Input() ngForOf!: NgIterable<T>;

  @Input()
  set trackByProp(ngForTrackBy: keyof T) {
    this.ngFor.ngForTrackBy = (index: number, item: T) => item[ngForTrackBy];
  }

  private ngFor = inject(NgForOf<T>, { self: true });

}
