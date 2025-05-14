import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';


const routes: Routes = [{ path: '', component: DashboardPageComponent },
  { path: 'room/:id', component: RoomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomKioskRoutingModule { }
