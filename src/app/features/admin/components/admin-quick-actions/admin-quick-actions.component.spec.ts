import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuickActionsComponent } from './admin-quick-actions.component';

describe('AdminQuickActionsComponent', () => {
  let component: AdminQuickActionsComponent;
  let fixture: ComponentFixture<AdminQuickActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminQuickActionsComponent]
    });
    fixture = TestBed.createComponent(AdminQuickActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
