import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface msg {
  id: number;
  msg: string;
}
@Injectable({
  providedIn: 'root',
})
export class SocketService {

  user ={username : '' , password : ''}

  constructor(private socket: Socket) {}
  startGame(room : string) {
    this.socket.emit('startGame' , room);
  } 
  gameStarted(){
    return this.socket.fromEvent('gameStarted');
  }
  endGame(room : any ){
    this.socket.emit('endGame' , room)
  }
   GameOver() {
    return this.socket.fromEvent('GameOver');
  }
  changeScore(msg: any) {
    this.socket.emit('scoreChange', msg);
  }
  scoreChanged() {
    return this.socket.fromEvent('scoreChanged');
  }

  userJoin(user: any, room: any) {
    this.user = user;
    this.socket.emit('joinRoom', { user: user, room: room });
  }
  leaveRoom(room : string   ){
    this.socket.emit('userLeaveRoom' , {room:room , user : this.user})
  }
  leftRoom(){
    return  this.socket.fromEvent('userLeftRoom')
  }
  userJoined() {
    return this.socket.fromEvent('userJoinedRoom');
  }
  getCurrentUser(){
    return this.user;
  }

 
}
