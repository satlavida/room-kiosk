import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // Import SharedModule
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { RoomOccupancyChartComponent } from './components/room-occupancy-chart/room-occupancy-chart.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AdminTaskListComponent } from './components/admin-task-list/admin-task-list.component';
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { AdminQuickActionsComponent } from './components/admin-quick-actions/admin-quick-actions.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    StatCardComponent,
    RoomOccupancyChartComponent,
    UserTableComponent,
    AdminTaskListComponent,
    RecentActivitiesComponent,
    AdminQuickActionsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AdminModule { }
