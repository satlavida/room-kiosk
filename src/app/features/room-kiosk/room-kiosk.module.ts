import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomKioskRoutingModule } from './room-kiosk-routing.module';
import { RoomKioskComponent } from './room-kiosk.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    RoomKioskComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    RoomKioskRoutingModule
  ]
})
export class RoomKioskModule { }
