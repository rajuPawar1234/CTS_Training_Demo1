import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommomserviceService } from 'src/app/commomservice.service';
import { SaveBooking } from 'src/app/Models/SaveBooking';
import { User } from 'src/app/register/models/User';
// import { SaveBooking } from './models/SaveBooking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  id : number=0;
  name : string ="";
  mobile : number = 0;
  email : string ="";
  password : string ="";

  trip : string = "";
  fromplace : string = "";
  toplace : string = "";
  onworddate : string = "";
  returndate : string = "";

  constructor(private commonservice : CommomserviceService,private http : HttpClient) { }

  ngOnInit(): void {
  }

  saveBooking(){
    let url = "http://localhost:3000/booking"
    let booking = new SaveBooking(this.id,this.name, this.mobile, this.email,this.password,this.trip,this.fromplace,this.toplace,this.onworddate,this.returndate)
    this.http.post(url, booking).subscribe(res=>{
      alert("Sucess");
      window.location.reload();
    })
  }

}
