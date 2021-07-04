import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommomserviceService } from 'src/app/commomservice.service';
import { AirlineSchedule } from 'src/app/Models/AirlineSchedule';
import { Flights } from 'src/app/Models/Flights';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css']
})
export class ManagescheduleComponent implements OnInit {

  flights : Flights[] = [] ;
  airlineSchedule : AirlineSchedule[] = [];

    id : number = 0;
    airlineName  :string = "";
    airlineNumber:string= "";
    fromPlace: string = "";
    toPlace:string = "";
    departureTime: string = "";
    seats:number = 0;

  constructor(private http : HttpClient,private service : CommomserviceService) { }

  ngOnInit(): void {
    this.getAllFlights();
    this.getAllSchedule();
  }

  getAllFlights(){
    this.service.getAllFlight().subscribe((res)=>{
      this.flights = res;
    })
  }

  getAllSchedule(){
    this.service.getAllSchedule().subscribe((res)=>{
      this.airlineSchedule = res;
    })
  }

  addFlightSchedule(){
    let airlineSchedule = new AirlineSchedule(this.id,this.airlineName,this.airlineNumber,this.fromPlace,this.toPlace,this.departureTime,this.seats);
    this.service.addFlightSchedule(airlineSchedule).subscribe((res)=>{
      console.log(res);
      alert("Flight Added Successfully..");
      window.location.reload();
    })
  }

  deleteSchedule(id : number){
    this.service.deleteSchedule(id).subscribe((res)=>{
      alert("Flight Schedule Deleted Successfully..");
      window.location.reload();
    })
  }

}
