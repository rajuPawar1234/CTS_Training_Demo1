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
  discountname : string = "";

  constructor(private userService : UserService ,private adminService : AdminService,private http : HttpClient) { }

  ngOnInit(): void {
    this.getAllDiscount();
  }

  saveBooking(){
    this.total = (this.total * this.persons);
    let booking = new SaveBooking(this.id,this.name, this.mobile, this.email,this.password,this.trip,this.fromplace,this.toplace,this.onworddate,this.returndate,this.persons,this.total,this.airlineid,this.discountname);
    this.userService.saveBooking(booking).subscribe(res=>{
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

  continue(id : number,price:number){
    console.log(id);
    this.airlineid = id;
    this.total = price;
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

  discount : Discount[] = [];

  getAllDiscount(){
    this.adminService.getAllDiscount().subscribe((res)=>{
      this.discount = res;
    },
    error=>{
      console.log("Error");
    })
  }
}
