import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private readonly URL = 'http://localhost:3000/rooms/';
  constructor(private http: HttpClient, private auth: AuthService) {}

  getRoomById(id: string) {
    const token = localStorage.getItem("token");
    const tt = `Bearer ${token}`;
    var headers_object = new HttpHeaders().set('Authorization', tt);

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.get(this.URL + id, httpOptions);
  }

  createRoom(room: any) {
    const token = localStorage.getItem("token");
    const tt = `Bearer ${token}`;
    var headers_object = new HttpHeaders().set('Authorization', tt);

    const httpOptions = {
      headers: headers_object,
    };
    console.log(httpOptions);
    return this.http.post(this.URL, room, httpOptions);
  }

  getRoomPlayers(id: string) {
    
    return this.http.get(this.URL +'players/'+ id  );
  }
  getRooms() {
    const token = localStorage.getItem("token");
    const tt = `Bearer ${token}`;
    var headers_object = new HttpHeaders().set('Authorization', tt);

    const httpOptions = {
      headers: headers_object,
    };

    console.log(token);
    return this.http.get(this.URL, httpOptions);
  }
  deleteRoom(id: string) {
      const token = localStorage.getItem("token");
    const tt = `Bearer ${token}`;
    var headers_object = new HttpHeaders().set('Authorization', tt);

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.delete(this.URL + id, httpOptions);
  }
}
