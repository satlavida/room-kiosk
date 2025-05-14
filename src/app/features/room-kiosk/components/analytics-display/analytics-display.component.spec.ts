import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDisplayComponent } from './analytics-display.component';

describe('AnalyticsDisplayComponent', () => {
  let component: AnalyticsDisplayComponent;
  let fixture: ComponentFixture<AnalyticsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsDisplayComponent]
    });
    fixture = TestBed.createComponent(AnalyticsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
