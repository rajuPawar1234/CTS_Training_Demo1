import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from '../service/userauthentication.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private userAuthService : UserauthenticationService,private myRoute : Router) { }

  username = sessionStorage.getItem('username');

  ngOnInit(): void {
  }
  
  logout(){
    this.userAuthService.logOut();
    this.myRoute.navigate(["login"]);
  }

  
}
