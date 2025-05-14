import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // Import SharedModule


import { RoomKioskRoutingModule } from './room-kiosk-routing.module';
import { RoomKioskComponent } from './room-kiosk.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    RoomKioskRoutingModule,
    SharedModule
  ]
})
export class RoomKioskModule { }
