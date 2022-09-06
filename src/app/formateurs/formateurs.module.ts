import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateursRoutingModule } from './formateurs-routing.module';
import { FormateursComponent } from './formateurs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AddComponent } from './add/add.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormateursComponent,
    ListComponent,
    ItemComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormateursRoutingModule, 
    MaterialModule,
    FormsModule
  ]
})
export class FormateursModule { }
