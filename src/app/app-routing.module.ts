// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Use LayoutComponent for the root path
    children: [ {
        path: '', // Changed from 'kiosk' to '' to make it the default child route
        loadChildren: () => import('./features/room-kiosk/room-kiosk.module').then(m => m.RoomKioskModule),
        data: { title: 'Room Kiosk Dashboard' } // Optional: for browser title or breadcrumbs
    }
    ]
  },
  //{ path: '', loadChildren: () => import('./features/room-kiosk/room-kiosk.module').then(m => m.RoomKioskModule) },
  // { path: '**', redirectTo: '' } // Optional: Wildcard route for 404 or redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }