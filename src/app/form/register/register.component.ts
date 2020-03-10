import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;
users:User[];

  constructor(private userService:UserService,private formBuilder:FormBuilder,private s:Router) { 
    this.userService.getALLUsers().subscribe(u=>{this.users=u;})
  }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      username:['',Validators.required],
      id:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneno:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    });
    
  }
  emailVaild(e:String){
    
    for(let user of this.users)
    {
      if(user.email===e){
        return false;
      }
      }
      return true;
  }
  addUser()
  {
    let e=this.registerForm.controls.email.value;
    if(this.emailVaild(e)){
    this.userService.saveUser(this.registerForm.value).subscribe(data => {
       alert('User Inserted Successfully' +data);
       alert('coming status'+data.regStatus);
       alert('Registered Successfully')
       this.registerForm.reset()
      }); }
      else
      {
        alert('already Email exsits')
        this.registerForm.reset()
      }
    
    // this.userService.saveUser(this.registerForm.value).subscribe(data =>{
    //   console.log('User Inserted Successfully');
    //   if(data.res==0){
    //     alert("User Already Avaialable");
    //   }
    //      else if(data.res==1){
    //       console.log("User Details are Entered Success fully");
    //       //alert("Successfully ENtered New User");
    //     //alert("Added New User");
    //     this.s.navigate(['/users']);
    //     }
    //     else{
    //       alert("ERROR");
    //     }
    // });
  }
//  submit()
// {
//   this.userService.reg().subscribe(data =>{
//     console.log("Coming status::"+data.reg);
//   })

}


