import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
user:User;
  constructor(private router:Router,private userService:UserService) { }
  updateProfile(){
    this.router.navigate(['/updateuserprofile'])
  }
  updatePassword(){
    this.router.navigate(['/changepassword']);
  }

  ngOnInit() {
    const c = sessionStorage.getItem('userId');
    this.userService.getUserById(+c).subscribe(data =>{
      this.user=data;
    })
  }

}
