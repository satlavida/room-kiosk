import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionFooterComponent } from './call-to-action-footer.component';

describe('CallToActionFooterComponent', () => {
  let component: CallToActionFooterComponent;
  let fixture: ComponentFixture<CallToActionFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallToActionFooterComponent]
    });
    fixture = TestBed.createComponent(CallToActionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
