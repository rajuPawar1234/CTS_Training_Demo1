import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { CommomserviceService } from 'src/app/commomservice.service';
import { Flights } from 'src/app/Models/Flights';

@Component({
  selector: 'app-manageflight',
  templateUrl: './manageflight.component.html',
  styleUrls: ['./manageflight.component.css'],

  providers: [ManageflightComponent, CommomserviceService]
})
export class ManageflightComponent implements OnInit {

  flights : Flights[] = [] ;
  flight : Flights[] = [] ;

  id : number = 0;
  airlinename : string ="";
  airlinecontact : number = 0;
  airlineaddress : string ="";

  constructor(private service : CommomserviceService, private http : HttpClient,private router : Router) {
    
   }

  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights(){
    this.service.getAllFlight().subscribe((res)=>{
      this.flights = res;
    })
  }

  addNewFlight(){
    let flight = new Flights(this.id,this.airlinename, this.airlinecontact, this.airlineaddress)
    this.service.addNewFlight(flight).subscribe(res=>{
      window.location.reload();
    })
}

    updateFlight(id : number){
      this.service.getFlightDetails(id).subscribe((res)=>{
        console.log(res);
        this.flight = res;
      })
  }

  deleteFlight(id : number){
    console.log("Deleting Id  "+id);
    this.service.deleteFlight(id).subscribe((res)=>{
      alert("Flight Deleted Successfully..");
      window.location.reload();
    })
}
  
}
