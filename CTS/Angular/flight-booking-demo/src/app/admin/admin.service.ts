import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirlineSchedule } from '../Models/AirlineSchedule';
import { Discount } from '../Models/Discount';
import { Flights } from '../Models/Flights';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private baseUrl1 = 'http://localhost:8082/flight-booking-admin/airline';

  constructor(private http : HttpClient) { }

  addNewFlight(flight : Flights){
    return this.http.post(`${this.baseUrl1}`,flight);
  }

  getAllFlight() {
    return this.http.get<any>("http://localhost:8082/flight-booking-admin/airline");
  }

  deleteFlight(airlineid : number){
    return this.http.delete("http://localhost:8082/flight-booking-admin/airline/"+airlineid);
  }

  // airlineshedule

  addNewFlightSchedule(airlineSchedule : AirlineSchedule){
    return this.http.post("http://localhost:8082/flight-booking-admin/airlineshedule",airlineSchedule);
  }

  getAllFlightSchedule() {
    return this.http.get<any>("http://localhost:8082/flight-booking-admin/airlineshedule");
  }

  deleteFlightSchedule(id : number){
    return this.http.delete("http://localhost:8082/flight-booking-admin/airlineshedule/"+id);
  }

  // discount

  addNewDiscount(discount : Discount){
    return this.http.post("http://localhost:8082/flight-booking-admin/discount",discount);
  }

  getAllDiscount() {
    return this.http.get<any>("http://localhost:8082/flight-booking-admin/discount");
  }

  deleteDiscount(id : number){
    return this.http.delete("http://localhost:8082/flight-booking-admin/discount/"+id);
  }
}
