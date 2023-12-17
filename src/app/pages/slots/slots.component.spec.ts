import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsComponent } from './slots.component';
import { TrackByModule } from 'src/app/shared/track-by/track-by.module';

describe('SlotsComponent', () => {
  let component: SlotsComponent;
  let fixture: ComponentFixture<SlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SlotsComponent, TrackByModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
