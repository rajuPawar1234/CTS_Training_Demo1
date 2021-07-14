import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomserviceService } from 'src/app/commomservice.service';
import { SaveBooking } from 'src/app/Models/SaveBooking';
import { UserService } from '../user.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {

  allBooking : SaveBooking[] = [] ;

  // id : number = 0;
  constructor(private service : CommomserviceService,private userService : UserService,private router : Router) { }

  ngOnInit(): void {
    this.getAllBooking();
  }

  getAllBooking(){
    this.userService.getBookedSchedule().subscribe((res)=>{
      this.allBooking = res;
      console.log(res); 
    })
  }

  nm : string ="";
  mb : string ="";
  persons : number = 0;
  trip : string = "";
  fromP : string = "";
  toP : string = "";
  dt : string = "";
  tot : number = 0;

  downloadTicket(id : number,name:string,mobile : string,persons:number,trip:string,fromplace:string,toplace:string,onworddate:string,total:number){
    this.nm = name;this.mb = mobile;this.persons = persons;this.trip = trip;this.fromP = fromplace;
    this.toP = toplace;this.dt = onworddate;this.tot = total;
  }

  cancelBooking(id : number){
    this.userService.deleteBooking(id).subscribe((res)=>{
      console.log(res);
      alert(res);
       window.location.reload();
    },
    error=>{
      alert(error);
    })
  }

}
