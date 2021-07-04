import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { CommomserviceService } from 'src/app/commomservice.service';
import { AirlineSchedule } from 'src/app/Models/AirlineSchedule';
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

  trip : string = "oneWay";
  fromplace : string = "";
  toplace : string = "";
  onworddate : string = "";
  returndate : string = "";

  // trip : string = 'oneWay';

  sss :number = 0;

  constructor(private commonservice : CommomserviceService ,private adminService : AdminService,private http : HttpClient) { }

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

  airlineSchedule : AirlineSchedule[] = [];

  

  getAllSchedule(){
    this.adminService.getAllFlightSchedule().subscribe((res)=>{
      this.airlineSchedule = res;
    })
  }

  continue(){
    console.log(this.sss);
    this.isShowDiv1 = !this.isShowDiv1;
  }

  isShowDiv = false;
  isShowDiv1 = false;

  search(){
    this.getAllSchedule();
    
  }

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
