import { Component, OnInit } from '@angular/core';
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
    username : 'player',
    score : 12
  } ;
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
}
