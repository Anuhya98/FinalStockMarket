import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuserprofile',
  templateUrl: './updateuserprofile.component.html',
  styleUrls: ['./updateuserprofile.component.css']
})
export class UpdateuserprofileComponent implements OnInit {
updateUserProfile:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.updateUserProfile=this.formBuilder.group({
      id:['',Validators.required],
      username:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      phoneno:['',Validators.required],
      password: [""],
      confirmpassword:[""]

    })
    const id = sessionStorage.getItem('userId');
      if(+id)
      {
      this.userService.getUserById(+id).subscribe(user => {
        this.updateUserProfile.patchValue(user);
      });
    }
  }
 
  updateProfile(){
    this.userService.updateUserInfo(this.updateUserProfile.value).subscribe(data=>{
      this.router.navigate(['/userlanding'])
    })

  }

}
