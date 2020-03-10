import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
users:User[];
currentUser:User;
// submit()
// {
//   console.log(this.loginForm.value);
// }
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService,private auth:AuthService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
    username:['',Validators.required],
      password:['',Validators.required]
    });
    this.userService.getALLUsers().subscribe(u=>{this.users=u;})
  }

  login(){
    let username=this.loginForm.get("username").value;
    let password=this.loginForm.get("password").value;
    const result=this.auth.authenticate(username,password);
    console.log(result);
  }
  // isValid()
  // {
  //   let admin_userName="admin@gmail.com";
  //   let admin_password="admin";
  //   let userName=this.loginForm.controls.email.value;
  //   let password=this.loginForm.controls.password.value;
  //   if((userName==admin_userName) && (password==admin_password))
  //   this.router.navigate(['/adminlanding']);
  //   else{
  //     if(this.login(userName,password))
  //     {
  //       if(this.userService.isActivated(this.currentUser))
  //       {
  //         localStorage.removeItem('userId');
  //         localStorage.setItem('userid',this.currentUser.id.toString());
  //         this.router.navigate(['/userlanding']);
  //       }
  //       else
  //       alert('Please Activate your account and login');
  //     }
  //     else
  //     {
  //       alert('Invalid UserName and Password');
  //       this.loginForm.reset();
  //     }
  //   }
  // }
  // login(userName:string,password:string){
  //   for(let user of this.users){
  //     if((userName==user.email)&&(password==user.password)){
  //       this.currentUser=user;
  //       return true;
  //     }
  //   }
  //   return false;
  // }
 

}
