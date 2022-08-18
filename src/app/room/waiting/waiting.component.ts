import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss'],
})
export class WaitingComponent implements OnInit {
   @Input()
  room: any;
  @Output()
  startGameEvent : EventEmitter<any>=new EventEmitter();
  @Output()
  leaveRoomEvent : EventEmitter<any>  = new EventEmitter();


  constructor( 
  ) {}

  ngOnInit(): void { 
    }

  
  leaveRoom(){
    this.leaveRoomEvent.emit()
   }
 

  startGame() {
    this.startGameEvent.emit() 
  }
}
