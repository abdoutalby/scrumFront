import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private players:any []=[];

  private subject = new Subject<any>;
  constructor() { }

  join(player : any){
    this.players.push(player);
    this.subject.next(this.players)
  }
  leave(){
      this.subject.next([]);
  }

  onJoin():Observable<any>{
    return this.subject.asObservable()
  }

   
}
