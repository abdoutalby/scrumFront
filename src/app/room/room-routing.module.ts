import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './crud/list/list.component';
import { GamebordComponent } from './gamebord/gamebord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room.component';
import { WaitingComponent } from './waiting/waiting.component';
 
const routes: Routes = [{ path: 'game/:id', component: RoomComponent }
,{
  path : 'crud' , component : ListComponent
} , 

]
   ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
