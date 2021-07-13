import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthgaurdService } from '../auth/authgaurd.service';
import { UserauthenticationService } from '../user/service/userauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private auth : AuthgaurdService,
    private userAuthService : UserauthenticationService) { }

  ngOnInit() {
  }
  
   username: string = '';
   password: string = '';
   invalidLogin = false;


  loginUser(){
  if (this.username == 'admin' && this.password == 'admin')
  {
    this.auth.sendToken(this.username);
    this.router.navigate(['admin']);
  }else 
    this.userAuthService.authenticate(this.username,this.password).subscribe((data)=>{
      this.router.navigate(['user']);
      this.invalidLogin = false;
    },
      error => {
        this.invalidLogin = true;
      }
    );
    //   if(this.email == 'raj' && this.password == 'raj'){
    //   this.auth.sendToken(this.email);
    //   this.router.navigate(['user']);
    // }
  }
}
