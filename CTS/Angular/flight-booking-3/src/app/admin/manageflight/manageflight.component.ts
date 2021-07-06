import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config, Observable } from 'rxjs';
import { CommomserviceService } from 'src/app/commomservice.service';
import { Flights } from 'src/app/Models/Flights';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manageflight',
  templateUrl: './manageflight.component.html',
  styleUrls: ['./manageflight.component.css'],

  providers: [ManageflightComponent, CommomserviceService]
})
export class ManageflightComponent implements OnInit {

  flights : Flights[] = [] ;
  
  airlineid : number = 0;
  airlinename : string ="";
  airlinecontact : number = 0;
  airlineaddress : string ="";

  constructor(private adminService : AdminService, private http : HttpClient,private router : Router) {
   }

  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights(){
    this.adminService.getAllFlight().subscribe((res)=>{
      console.log(res);
      this.flights = res;
    })
  }

  addNewFlight(){
    let flight = new Flights(this.airlineid,this.airlinename, this.airlinecontact, this.airlineaddress)
    this.adminService.addNewFlight(flight).subscribe((res)=>{
      console.log(res);
      window.location.reload();
    })
}

    updateFlight(id : number){
      this.router.navigate(['updateFlight', id]);
      // this.adminService.getFlightDetail(id).subscribe((res)=>{
      //   console.log(res);
      // })
  }

 

  deleteFlight(airlineid : number){
    this.adminService.deleteFlight(airlineid).subscribe((res)=>{
      alert("Flight Deleted Successfully..");
      window.location.reload();
    })
}
  
}
