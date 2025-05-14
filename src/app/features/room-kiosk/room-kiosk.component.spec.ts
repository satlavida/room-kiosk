import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomKioskComponent } from './room-kiosk.component';

describe('RoomKioskComponent', () => {
  let component: RoomKioskComponent;
  let fixture: ComponentFixture<RoomKioskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomKioskComponent]
    });
    fixture = TestBed.createComponent(RoomKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
