import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input() room: any;
  @Input() user: any; 
  @Output() deleteEvent : EventEmitter<string>= new EventEmitter()
  loading = false;
  isOwner = true;

   
  constructor( 
    private router : Router,
  ) {}

  ngOnInit() {
    
  }

  deleteRoom( ){
     this.deleteEvent.emit(this.room._id);
  }

  joinRoom() {
   
    console.log('join room')
    this.router.navigate(['/room/game/' , this.room._id]);

  }



  leaveRoom() {
    this.loading = true;
 
    console.log('leave room')
  }

  isString<T>(value: T) {
    return typeof value === 'string';
  }
}
