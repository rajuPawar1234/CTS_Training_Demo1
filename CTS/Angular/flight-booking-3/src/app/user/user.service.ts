import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaveBooking } from '../Models/SaveBooking';
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
  
  saveBooking(booking : SaveBooking){
    return this.http.post("http://localhost:8083/flight-booking-user/booking",booking);
  }

  getAllBooking(){
    return this.http.get<any>("http://localhost:8083/flight-booking-user/booking");
  }

  deleteBooking(id:number){
    return this.http.delete("http://localhost:8083/flight-booking-user/booking/"+id);
  }
}
