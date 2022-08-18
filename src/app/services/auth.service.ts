import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  URL ='http://localhost:3000/auth/login'
  constructor(private http : HttpClient) { }

  login(user : any){ 
    return this.http.post(this.URL , user);
  }

  
}
