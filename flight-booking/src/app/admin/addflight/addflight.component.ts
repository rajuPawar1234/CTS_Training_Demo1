import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomserviceService } from 'src/app/commomservice.service';
import { Flights } from 'src/app/Models/Flights';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  id : number=0;
  airlinename : string ="";
  airlinecontact : number = 0;
  airlineaddress : string ="";

  constructor(private commonservice : CommomserviceService, private http : HttpClient,private router : Router) { }

  ngOnInit(): void {
  }
   
  addNewFlight(){
      let flight = new Flights(this.id,this.airlinename, this.airlinecontact, this.airlineaddress)
      this.commonservice.addNewFlight(flight).subscribe(res=>{
        window.location.reload();
      })
  }

}