import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
 
export enum ActionType {
  Update,
  Create,
}

export interface UpsertDialogData {
  type: ActionType;
  room?: any;
}

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent {
  
  type: ActionType;
  upsertForm = this.formBuilder.group({
     duration:null,
     nbStage :  null,
     owner : 'tester',
     title : null,
     nbPlayers:0

  });

 room: any | undefined;

  ActionType = ActionType;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: UpsertDialogData,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddRoomComponent>,
    private  roomService: RoomService,
    private snack : MatSnackBar

  ) {
    this.type = data.type;

    this.upsertForm.patchValue({
      ...this.room,
    });
  }

  submit() {
    const roomInput = this.upsertForm.value;

     this.roomService.createRoom(roomInput).subscribe({
      next :(res)=>{
        console.log(res)
        this.dialogRef.close()
        this.snack.open('room added ' ,'OK' )
       
      }
     });

 

     
  }
}
