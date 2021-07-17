import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaveBooking } from '../Models/SaveBooking';
import { User } from '../register/models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  tokenStr : string = "";

  constructor(private http :HttpClient) { }

  // http://localhost:8083/flight-booking-user/user

  saveUser(user : User){
    return this.http.post("http://localhost:8083/flight-booking-user/register",user);
  }
  
  saveBooking(booking : SaveBooking){
    let onlyToken = sessionStorage.getItem('onlyToken');
    var headers_object = new HttpHeaders().set("Authorization","Bearer "+onlyToken);
    return this.http.post("http://localhost:8083/flight-booking-user/booking",booking,{ headers: headers_object});
  }

  getAllBooking(){
    let onlyToken = sessionStorage.getItem('onlyToken');
    var headers_object = new HttpHeaders().set("Authorization","Bearer "+onlyToken);   
    return this.http.get<any>("http://localhost:8083/flight-booking-user/booking",{ headers: headers_object});
  }

  getAllBookingById(id : number){
    let onlyToken = sessionStorage.getItem('onlyToken');
    var headers_object = new HttpHeaders().set("Authorization","Bearer "+onlyToken);   
    return this.http.get<any>("http://localhost:8083/flight-booking-user/booking/"+id,{ headers: headers_object});
  }

  getBookedSchedule(){
    let onlyToken = sessionStorage.getItem('onlyToken');
    var headers_object = new HttpHeaders().set("Authorization","Bearer "+onlyToken);   
    return this.http.get<any>("http://localhost:8083/flight-booking-user/bookedSchedule",{ headers: headers_object});
  }

  deleteBooking(id:number){
    let onlyToken = sessionStorage.getItem('onlyToken');
    var headers_object = new HttpHeaders().set("Authorization","Bearer "+onlyToken);
    return this.http.delete("http://localhost:8083/flight-booking-user/booking/"+id,{ headers: headers_object});
  }
}
