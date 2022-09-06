import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-gamebord',
  templateUrl: './gamebord.component.html',
  styleUrls: ['./gamebord.component.scss'],
})
export class GamebordComponent implements OnInit {
  idRoom: any;
  player : any ={
    username : 'player0',
    score : 12
  } ;

  @Output()
  ScoreUpEvent : EventEmitter<any>= new EventEmitter();
  constructor(
    private service: SocketService,
    private snack: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idRoom = this.activeRoute.snapshot.params['id'];
    console.log(this.idRoom);
  }

  scoreUp(p : any){
    this.ScoreUpEvent.emit(p);
  }
}
