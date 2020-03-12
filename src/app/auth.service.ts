import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './models/user';

const url = "http://localhost:8765/user-service/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService:UserService,private http:HttpClient) { }

  authenticate(username:string,password:string){
    let authenticationToken = "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
    let headers = new HttpHeaders({
      Authorization: authenticationToken
    });
    console.log("calling server")
    console.log(authenticationToken);
    // send the request
     return this.http.get(url, { headers }).pipe(
       map((data:User)=>{
         console.log(data);
         sessionStorage.setItem("username",username);
         sessionStorage.setItem("password",authenticationToken);
         sessionStorage.setItem("userId",data.id.toString());
         sessionStorage.setItem("userType",data.role==="ROLE_ADMIN"?"admin":"user");
         return data;
       }),
       map(error=>{
         return error;
       })
     );
      }
    //   // success function
    //   map(successData => {
    //     console.log("success ")
    //     sessionStorage.setItem("username", username);
    //     // save the token
    //     sessionStorage.setItem("token", authenticationToken);
    //     return successData;
    //   }),
    //    // failure function
    //    map(failureData => {
    //     // console message 
    //     console.log("failure")
    //     return failureData;
    //   })
    // );
  
  getAuthenticationToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    if (user == null)
      return false;
    return true;
  }
  getProfileUrl(): string {
    let url = sessionStorage.getItem("profile");
    return url;
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('username');
    return user;
  }
  
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  }
 

}
