import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { CommomserviceService } from 'src/app/commomservice.service';
import { AirlineSchedule } from 'src/app/Models/AirlineSchedule';
import { Discount } from 'src/app/Models/Discount';
import { SaveBooking } from 'src/app/Models/SaveBooking';
import { User } from 'src/app/register/models/User';
import { UserService } from '../user.service';
// import { SaveBooking } from './models/SaveBooking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(
    private userService : UserService ,
    private adminService : AdminService,
    private http : HttpClient) { }

  ngOnInit(): void {
    this.getAllDiscount();
   }

  airlineSchedule : AirlineSchedule[] = [];

  search(fromplace : string,toplace : string){
    console.log(fromplace);
    console.log(toplace);
    this.adminService.getFlightScheduleFromTo(fromplace,toplace).subscribe((res)=>{
      console.log(res);
      this.airlineSchedule = res;
    },
      error=>{
        console.log(error);
      }
    );
  }

  continue(id : number,price:number,departuretime : string){
    console.log(id);
    this.airlineid = id;
    this.total = price;
    this.onworddate = departuretime;
    this.isShowDiv1 = !this.isShowDiv1;
  }

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  id : number=0;
  name : string ="";
  mobile : string = "";
  email : string ="";
  password : string ="";

  trip : string = "oneWay";
  fromplace : string = "";
  toplace : string = "";
  onworddate : string = "";
  returndate : string = "";
  persons : number = 0;
  total : number = 0;
  airlineid : number = 0;
  discount : number = 0;
  status : string ="Booked";
  
  saveBooking(){
    this.total = (this.total * this.persons);
   let tot_Dis = ((this.discount / this.total) * 100); 
   this.total = this.total - tot_Dis;
    //alert( this.total - tot_Dis);
    let booking = new SaveBooking(this.id,this.name, this.mobile, this.email,this.password,this.trip,this.fromplace,this.toplace,this.onworddate,this.returndate,this.persons,this.total,this.airlineid,this.discount,this.status);
    console.log(booking);
    this.userService.saveBooking(booking).subscribe(res=>{
      alert("Sucess");
      window.location.reload();
    })
  }

  isShowDiv = false;
  isShowDiv1 = false;

  allDiscount : Discount[] = [];

  getAllDiscount(){
    this.adminService.getAllDiscount().subscribe((res)=>{
      this.allDiscount = res;
    },
    error=>{
      console.log("Error");
    })
  }
}
