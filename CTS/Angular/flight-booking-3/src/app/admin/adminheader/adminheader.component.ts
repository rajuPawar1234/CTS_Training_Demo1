import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthgaurdService } from 'src/app/auth/authgaurd.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private auth:AuthgaurdService,private myRoute:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.myRoute.navigate(["login"]);
  }
}
