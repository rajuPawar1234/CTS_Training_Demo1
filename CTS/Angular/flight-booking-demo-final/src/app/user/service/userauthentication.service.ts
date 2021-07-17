import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})

export class UserauthenticationService {

  constructor(private httpClient:HttpClient) { }
  // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  authenticate(username :string , password : string) {
    return this.httpClient.post<any>('http://localhost:8083/flight-booking-user/authenticate',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('onlyToken', userData.token);
        let tokenStr= 'Bearer '+userData.token;
        console.log("TOKEN "+tokenStr);
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    let usetokenStrr = sessionStorage.getItem('token');
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('onlyToken');
  }

}

//       /usr/angular/flight-booking-demo