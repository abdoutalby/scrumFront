import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FormateursComponent } from './formateurs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: '', component: FormateursComponent  , children: [
  {path: "" , component: ListComponent} , 
  {path : 'add' , component : AddComponent},
  // {path: 'item', component: ItemComponent},
  // {path: 'list', component: ListComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateursRoutingModule { }
