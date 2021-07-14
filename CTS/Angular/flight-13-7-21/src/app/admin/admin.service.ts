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
private baseUrl1 = 'http://3.142.213.73:8082/flight-booking-admin/airline';

  constructor(private http : HttpClient) { }

  addNewFlight(flight : Flights){
    return this.http.post(`${this.baseUrl1}`,flight);
  }

  updateFlight(airlineid : number,flight : Flights){
    return this.http.put("http://3.142.213.73:8082/flight-booking-admin/airline/"+airlineid,flight);
  }

  getFlightDetail(airlineid : number) {
    return this.http.get<any>("http://3.142.213.73:8082/flight-booking-admin/airline/"+airlineid);
  }

  getAllFlight() {
    return this.http.get<any>("http://3.142.213.73:8082/flight-booking-admin/airline");
  }

  deleteFlight(airlineid : number){
    return this.http.delete("http://3.142.213.73:8082/flight-booking-admin/airline/"+airlineid);
  }

  // airlineshedule

  addNewFlightSchedule(airlineSchedule : AirlineSchedule){
    return this.http.post("http://3.142.213.73:8082/flight-booking-admin/airlineshedule",airlineSchedule);
  }

  updateFlightSchedule(id : number,airlineSchedule : AirlineSchedule){
    return this.http.put("http://3.142.213.73:8082/flight-booking-admin/airlineshedule/"+id,airlineSchedule);
  }

  getAllFlightSchedule() {
    return this.http.get<any>("http://3.142.213.73:8082/flight-booking-admin/airlineshedule");
  }

  deleteFlightSchedule(id : number){
    return this.http.delete("http://3.142.213.73:8082/flight-booking-admin/airlineshedule/"+id);
  }

  getFlightScheduleFromTo(fromP : string,toP : string){
    //return this.http.get<any>("http://localhost:8082/flight-booking-admin/getFlightSchedule/"+fromP+"/"+toP);
    return this.http.get<any>("http://3.142.213.73:8082/flight-booking-admin/getFlightSchedule?fromP="+fromP+"&toP="+toP);
  }

  addNewDiscount(discount : Discount){
    return this.http.post("http://3.142.213.73:8082/flight-booking-admin/discount",discount);
  }

  updateDiscount(id : number,dis : Discount){
    return this.http.put("http://3.142.213.73:8082/flight-booking-admin/discount/"+id,dis);
  }

  getAllDiscount() {
    return this.http.get<any>("http://3.142.213.73:8082/flight-booking-admin/discount");
  }

  deleteDiscount(id : number){
    return this.http.delete("http://3.142.213.73:8082/flight-booking-admin/discount/"+id);
  }
}
