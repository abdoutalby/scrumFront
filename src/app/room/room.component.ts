import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../services/room.service';
import { SocketService } from '../services/socket.service';

enum GAME_STATUS {
  LOGIN,
  WAITING,
  PLAYING,
  OVER,
}
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit , OnDestroy {
  gameStatus = 'LOGIN';
  idRoom = '';
  room: any;
  timer : any ;
  constructor(
    private socket: SocketService,
    private activeRoute: ActivatedRoute,
    private service: SocketService,
    private roomService: RoomService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idRoom = this.activeRoute.snapshot.params['id'];
    console.log(this.idRoom, 'room id ');
    this.getRoom();
    this.getJoinedUser();
    this.gameStarted();
    this.gameOver();
    this.leftRoom();
  }

  ngOnDestroy(): void {
this.leaveRoom()  }
  getRoom() {
    this.roomService.getRoomById(this.idRoom).subscribe({
      next: (room) => {
        this.room = room;
      },
    });
  }

  scoreUp(id : any){
    const msg = {
      roomId : this.idRoom,
      player : id
    }
    this.service.scoreUp(msg)
  }
  onScoreUp(){
    this.service.OnScoreUp().subscribe({
      next : (res)=>{
        console.log(res);
        console.log("score up")
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

  getJoinedUser() {
    this.service.userJoined().subscribe({
      next: (data: any) => {
        this.snack.open('user joined room', 'OK');
        this.getRoom();
      },
    });
  }

  login(e: any) {
    this.socket.userJoin(e.user, this.idRoom);
    this.gameStatus = 'WAITING';
  }

  startGame() {
    this.service.startGame(this.idRoom);
  }

  gameOver() {
    this.service.GameOver().subscribe({
      next: () => {
        console.log('game over')
        this.snack.open('game OVER !', 'OK');
        this.gameStatus = 'OVER'
         },
    });
  }

  gameStarted() {
    this.service.gameStarted().subscribe({
      next: (res) => {
        this.gameStatus = 'PLAYING';
        this.snack.open('Game Started', 'OK');
       
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  leaveRoom( ) {
    this.service.leaveRoom(this.idRoom);
    this.gameStatus = 'LOGIN';
  }
  leftRoom() {
    this.service.leftRoom().subscribe({
      next: (res) => {
        this.getRoom();
        this.snack.open('user left the room ', 'OK');
      },
    });
  }
}
