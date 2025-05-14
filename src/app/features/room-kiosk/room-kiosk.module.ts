import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // Import SharedModule
import { RouterModule } from '@angular/router';

import { RoomKioskRoutingModule } from './room-kiosk-routing.module';
import { RoomKioskComponent } from './room-kiosk.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { AnalyticsDisplayComponent } from './components/analytics-display/analytics-display.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    HeroSectionComponent,
    RoomCardComponent,
    RoomListComponent,
    AnalyticsDisplayComponent,
    RoomDetailComponent,
  ],
  imports: [
    CommonModule,
    RoomKioskRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class RoomKioskModule { }
