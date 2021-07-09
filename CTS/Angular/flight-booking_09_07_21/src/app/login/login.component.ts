import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthgaurdService } from '../auth/authgaurd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private auth : AuthgaurdService) { }

  ngOnInit() {
  }
  
   email: string = '';
   password: string = '';

  loginUser(){
  if (this.email == 'admin' && this.password == 'admin')
  {
    this.auth.sendToken(this.email);
    this.router.navigate(['admin']);
  }else if(this.email == 'raj' && this.password == 'raj'){
    this.auth.sendToken(this.email);
    this.router.navigate(['user']);
  }
  }
}
