import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneDetailsComponent } from './time-zone-details.component';

describe('TimeZoneDetailsComponent', () => {
  let component: TimeZoneDetailsComponent;
  let fixture: ComponentFixture<TimeZoneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeZoneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
