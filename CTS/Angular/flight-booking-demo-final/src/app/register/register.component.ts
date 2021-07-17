import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomserviceService } from '../commomservice.service';
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
  username : string ="";
  password : string ="";

  allUser: Object | undefined;

  constructor(private userService : UserService,private router : Router,private common : CommomserviceService) { }

  ngOnInit(): void {
  }
   
  registerUser(){
    let user = new User(this.id,this.name,this.mobile,this.username,this.password)
    this.userService.saveUser(user).subscribe((res)=>{
      alert("User Registerd Successfully");
      window.location.reload();
      // this.router.navigateByUrl('login');
      // this.common.reload('register');
     
    });
    // this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  getAllUsers(){
   
  }
}
