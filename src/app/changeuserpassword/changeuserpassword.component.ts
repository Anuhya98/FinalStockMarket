import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeuserpassword',
  templateUrl: './changeuserpassword.component.html',
  styleUrls: ['./changeuserpassword.component.css']
})
export class ChangeuserpasswordComponent implements OnInit {
changepasswordForm:FormGroup
  constructor(private router:Router,private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.changepasswordForm=this.formBuilder.group({
      currentpassword:['',Validators.required],
      newpassword:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }
  updateThePassword(){
    let old=this.changepasswordForm.controls.currentpassword.value;
    let pass=this.changepasswordForm.controls.newpassword.value;
    let confirm=this.changepasswordForm.controls.confirmpassword.value;
    let userId=sessionStorage.getItem("userId");
    this.userService.getUserById(+userId).subscribe(u=>{
      if(u.password===old){
        if(pass===confirm){
          u.password=pass;
          this.userService.updateUserInfo(u).subscribe(us=>{
            alert("password changed successfully")
            this.router.navigate(['/logout'])
          })
        }
      }else{
        alert("old password doesnt match")
      }
    })
  }

}
