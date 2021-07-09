import { Component, OnInit } from '@angular/core';
import { UserauthenticationService } from '../service/userauthentication.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private userAuthService : UserauthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userAuthService.logOut();
  }
}
