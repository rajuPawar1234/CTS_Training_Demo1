import { Component, OnInit } from '@angular/core';
import { AuthgaurdService } from 'src/app/auth/authgaurd.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private userServive : AuthgaurdService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userServive.logout();
  }
}
