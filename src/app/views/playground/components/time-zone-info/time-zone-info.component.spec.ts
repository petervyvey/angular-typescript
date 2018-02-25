import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneInfoComponent } from './time-zone-info.component';

describe('TimeZoneInfoComponent', () => {
  let component: TimeZoneInfoComponent;
  let fixture: ComponentFixture<TimeZoneInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeZoneInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZoneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
