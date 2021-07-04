import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
  if (this.email == 'admin' && this.password == 'admin')
  {
    this.router.navigate(['admin']);
  }else if(this.email == 'raj' && this.password == 'raj'){
    this.router.navigate(['user']);
  }
  }
}
