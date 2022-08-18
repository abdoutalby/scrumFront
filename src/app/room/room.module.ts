import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';
import { WaitingComponent } from './waiting/waiting.component';
import { GamebordComponent } from './gamebord/gamebord.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRoomComponent } from './crud/add-room/add-room.component';
import { DetailsComponent } from './crud/details/details.component';
import { ListComponent } from './crud/list/list.component';
import { RoomItemComponent } from './crud/room-item/room-item.component';


@NgModule({
  declarations: [
    RoomComponent,
    LoginComponent,
    ScoreComponent,
    HomeComponent,
    WaitingComponent,
    GamebordComponent,
    AddRoomComponent,
    DetailsComponent,
    ListComponent,
    RoomItemComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
