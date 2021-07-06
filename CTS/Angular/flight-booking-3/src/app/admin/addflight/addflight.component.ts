import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomserviceService } from 'src/app/commomservice.service';
import { Flights } from 'src/app/Models/Flights';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  airlineid : number=0;
  airlinename : string ="";
  airlinecontact : number = 0;
  airlineaddress : string ="";

  constructor(private commonservice : CommomserviceService,private adminservice : AdminService, private http : HttpClient,private router : Router) { }

  ngOnInit(): void {
  }
   
  addNewFlight(){
      let flight = new Flights(this.airlineid,this.airlinename, this.airlinecontact, this.airlineaddress)
      this.adminservice.addNewFlight(flight).subscribe((res)=>{
        console.log(res);
        window.location.reload();
      })
  }

}

// window.location.reload();