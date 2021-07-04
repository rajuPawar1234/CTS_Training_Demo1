import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from './models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id : number = 0;
  name : string ="";
  mobile : string = "";
  email : string ="";
  password : string ="";

  allUser: Object | undefined;

  constructor(private userService : UserService,private http : HttpClient) { }

  ngOnInit(): void {
  }
   
  registerUser(){
    let user = new User(this.id,this.name, this.mobile, this.email,this.password)
    this.userService.saveUser(user).subscribe((res)=>{
      alert("User Registerd Successfully");
      window.location.reload();
    })
    // let url = "http://localhost:3000/users"
    // this.http.post(url, user).subscribe(res=>{console.log(res); this.getAllUsers();console.log(this.allUser)})
  }

  getAllUsers(){
   // this.commonservice.getAllUser().subscribe((res)=>{this.allUser = res})
  }
}
