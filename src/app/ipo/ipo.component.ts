import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IpoService } from '../ipo.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
ipoForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private ipoService:IpoService) { }
  submit(){
    console.log(this.ipoForm.value);
  }

  ngOnInit() {
    this.ipoForm=this.formBuilder.group({
      id:['',Validators.required],
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      pricepershare:['',Validators.required],
      totalnoofshares:['',Validators.required],
      opendatetime:['',Validators.required]
      
    });

  }
  addIPO()
  {
    this.ipoService.saveIPO(this.ipoForm.value).subscribe(data =>{
      console.log('IPO inserted successfully');
      this.router.navigate(['/displaystockexchanges'])
    });
  }
  // addUser()
  // {
  //   this.userService.saveUser(this.registerForm.value).subscribe(data =>{
  //     console.log('User Inserted Successfully');
  //   });
  // }

}
