import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

 

  private readonly URL = 'http://localhost:3000/rooms/'
  constructor(private http : HttpClient) { }

  getRoomById(id : string ){
    const token = localStorage.getItem('token');
   
   let headers = new HttpHeaders();
    headers.set(  
      'Authorization' , 'Bearer Token '+token
     )
    return   this.http.get(this.URL+id );
  }

  createRoom(room : any){
    return this.http.post(this.URL , room)
  }

  getRoomPlayers(id : string ){
    return this.http.get(this.URL+id +'/players')
  }
 getRooms() {
    return this.http.get(this.URL);
  }
     deleteRoom(id: string) {
    return  this.http.delete(this.URL+id);
  }
}
