import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirlineSchedule } from './Models/AirlineSchedule';
import { Discount } from './Models/Discount';
import { Flights } from './Models/Flights';
import { User } from './register/models/User';

@Injectable({
  providedIn: 'root'
})
export class CommomserviceService {

  constructor(private http : HttpClient) { }

 clickWelcome(){
   return this.http.get("http://localhost:8080/welcome");
 }

  registerUser(user: User) {
        return this.http.post("http://localhost:3000/users", user)
  }

  getAllUser(){
    return this.http.get("http://localhost:3000/users");
  }


  /////////////////////////////////////

  addNewFlight(flight : Flights){
    let url = "http://localhost:3000/flights"
    return this.http.post(url, flight);
}

  getAllFlight(){
    return this.http.get<any>("http://localhost:3000/flights");
  }

  getFlightDetails(id : number){
    return this.http.get<any>("http://localhost:3000/flights/"+id);
  }

  deleteFlight(id : number){
    return this.http.delete("http://localhost:3000/flights/"+id);
  }

  getAllBooking(){
    return this.http.get<any>("http://localhost:3000/booking");
  }

  cancelBooking(id:number){
    return this.http.delete("http://localhost:3000/booking/"+id);
  }

}
