import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [  
   { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
   { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
