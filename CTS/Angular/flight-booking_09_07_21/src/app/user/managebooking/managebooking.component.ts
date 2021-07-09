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
    this.userService.getAllBooking().subscribe((res)=>{
      this.allBooking = res;
      console.log(res);
      
    })
  }

  cancelBooking(id : number){
    this.userService.deleteBooking(id).subscribe((res)=>{
      console.log(res);
      // this.router.navigate(['managebooking']);
       window.location.reload();
    })
  }

}
