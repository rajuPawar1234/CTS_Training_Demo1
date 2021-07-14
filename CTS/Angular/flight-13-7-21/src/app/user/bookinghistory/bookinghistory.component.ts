import { Component, OnInit } from '@angular/core';
import { SaveBooking } from 'src/app/Models/SaveBooking';
import {CommomserviceService} from 'src/app/commomservice.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  allBooking : SaveBooking[] = [] ;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllBooking();
  }

  getAllBooking(){
    this.userService.getAllBooking().subscribe((res)=>{
      this.allBooking = res;
    })
  }
}
