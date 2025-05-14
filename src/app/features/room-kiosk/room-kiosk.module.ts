import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // Import SharedModule


import { RoomKioskRoutingModule } from './room-kiosk-routing.module';
import { RoomKioskComponent } from './room-kiosk.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { AnalyticsDisplayComponent } from './components/analytics-display/analytics-display.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    HeroSectionComponent,
    RoomCardComponent,
    RoomListComponent,
    AnalyticsDisplayComponent
  ],
  imports: [
    CommonModule,
    RoomKioskRoutingModule,
    SharedModule
  ]
})
export class RoomKioskModule { }
