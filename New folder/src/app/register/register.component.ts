import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommomserviceService } from '../commomservice.service';
import { User } from './models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : string ="";
  mobile : number = 0;
  email : string ="";
  pwd : string ="";
  allUser: Object | undefined;

  constructor(private commonservice : CommomserviceService,private http : HttpClient) { }

  ngOnInit(): void {
  }
   
  registerUser(){
    let user = new User(this.username, this.mobile, this.email,this.pwd)
    this.commonservice.registerUser(user).subscribe((res)=>{
      alert("User Registerd Successfully");
      window.location.reload();
    })
    // let url = "http://localhost:3000/users"
    // this.http.post(url, user).subscribe(res=>{console.log(res); this.getAllUsers();console.log(this.allUser)})
  }

  getAllUsers(){
    this.commonservice.getAllUser().subscribe((res)=>{this.allUser = res})
  }
}
