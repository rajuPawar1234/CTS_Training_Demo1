import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommomserviceService } from 'src/app/commomservice.service';
import { AirlineSchedule } from 'src/app/Models/AirlineSchedule';
import { Flights } from 'src/app/Models/Flights';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css']
})
export class ManagescheduleComponent implements OnInit {

  flights : Flights[] = [] ;
  airlineSchedule : AirlineSchedule[] = [];

    id : number = 0;
    airlinename  :string = "";
    airlinenumber:string= "";
    fromplace: string = "";
    toplace:string = "";
    departuretime: string = "";
    seats:number = 0;
    price : number = 0;

  constructor(private http : HttpClient,private adminService : AdminService) { }

  ngOnInit(): void {
    this.getAllFlights();
    this.getAllSchedule();
  }

  getAllFlights(){
    this.adminService.getAllFlight().subscribe((res)=>{
      this.flights = res;
    })
  }

  getAllSchedule(){
    this.adminService.getAllFlightSchedule().subscribe((res)=>{
      this.airlineSchedule = res;
    })
  }

  addFlightSchedule(){
    let airlineSchedule = new AirlineSchedule(this.id,this.airlinename,this.airlinenumber,this.fromplace,this.toplace,this.departuretime,this.seats,this.price);
    this.adminService.addNewFlightSchedule(airlineSchedule).subscribe((res)=>{
      console.log(res);
      alert("Flight Schedule Added Successfully..");
      window.location.reload();
    })
  }

  deleteSchedule(id : number){
    this.adminService.deleteFlightSchedule(id).subscribe((res)=>{
      alert("Flight Schedule Deleted Successfully..");
      window.location.reload();
    })
  }

    anm  :string = "";
    ano:string= "";
    fp: string = "";
    tp:string = "";
    dt: string = "";
    s:number = 0;
    p : number = 0;

  forUpdateSchedule(id : number,anm : string,ano : string,fp : string,tp : string,dt : string,s : number,p : number){
    this.id = id;
    this.anm= anm;
    this.ano = ano;
    this.fp = fp;
    this.tp = tp;
    this.dt = dt;
    this.s = s;
    this.p=p;
  }

  updateSchedule(){
    let airlineSchedule = new AirlineSchedule(this.id,this.anm,this.ano,this.fp,this.tp,this.dt,this.s,this.p);
   console.log(airlineSchedule);
   this.adminService.updateFlightSchedule(this.id,airlineSchedule).subscribe((res)=>{
    console.log(res);
        alert("Flight Schedule Updated Successfully..");
        window.location.reload();
   },
   error=>{
      console.log(error);
   });
  }
}
