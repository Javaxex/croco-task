import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackByPropDirective } from "./track-by-prop.directive";

@Component({
  standalone: true,
  template: `
    <div *ngFor="let item of items; let i = index; trackBy: trackByFn" [ngForTrackByProp]="'id'">
      {{ item.name }}
    </div>
  `
})
class TestComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}

describe('TrackByPropDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, TrackByPropDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create an instance', () => {
    const directive = new TrackByPropDirective<any>();
    expect(directive).toBeTruthy();
  });

  it('should set ngForTrackBy correctly', () => {
    const divElements = element.querySelectorAll('div');
    const trackByFn = component.trackByFn;

    divElements.forEach((div, index) => {
      const ngForInstance = div.getAttribute('ngForTrackBy');
      expect(ngForInstance).toBeDefined();
      expect(ngForInstance).toEqual(trackByFn(index, component.items[index]).toString());
    });
  });
});
