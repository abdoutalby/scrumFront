import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { Stage1Component } from './room/home/stage1/stage1.component';

const routes: Routes = [
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then((m) => m.RoomModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'formateurs',
    loadChildren: () =>
      import('./formateurs/formateurs.module').then((m) => m.FormateursModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
