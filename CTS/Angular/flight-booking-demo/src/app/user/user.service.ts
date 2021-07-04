import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../register/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }

  // http://localhost:8083/flight-booking-user/user

  saveUser(user : User){
    return this.http.post("http://localhost:8083/flight-booking-user/user",user);
  }
  
}
