import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomKioskComponent } from './room-kiosk.component';

const routes: Routes = [{ path: '', component: RoomKioskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomKioskRoutingModule { }
