import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UsersComponent } from './users/users.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl = 'http://localhost:8001/users/';
  constructor(private httpClient: HttpClient,@Inject(HttpClient)  private ht) { }
  getALLUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl,user);
  }
  reg(){
   return this.ht.get('http://localhost:8001/users');
  
  }
  deleteUser(id : number):Observable<User>{
    //return this.httpClient.delete<User>(this.httpUrl + id);
    return this.ht.delete(this.httpUrl+id);
  }
  updateUserInfo(user:User):Observable<User>{
    //return this.httpClient.put<User>(this.httpUrl+user.id,user);
    return this.ht.put(this.httpUrl,user);
  }
  getUserById(id:number):Observable<User>{
    //alert("Id"+id)
   // return this.httpClient.get<User>(this.httpUrl+id);
   return this.ht.get(this.httpUrl+id);
  }
  serActivation(obj){
    return this.ht.put("http://localhost:8001/users/activate",obj)
  }
  LoggedIn(){
    let user_id=localStorage.getItem('userId');
    if(user_id==null)
    return false;
    else return true;
  }
  isActivated(user:User){
    if(user.active=="yes"){
      return true;
    }
  }

}
