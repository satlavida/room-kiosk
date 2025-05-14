import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomKioskRoutingModule } from './room-kiosk-routing.module';
import { RoomKioskComponent } from './room-kiosk.component';


@NgModule({
  declarations: [
    RoomKioskComponent
  ],
  imports: [
    CommonModule,
    RoomKioskRoutingModule
  ]
})
export class RoomKioskModule { }
