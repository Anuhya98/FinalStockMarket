import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IpoService } from '../ipo.service';

@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {
 addipoForm:FormGroup;
 submit(){
   console.log(this.addipoForm.value);
 }
  ipoService: any;
  constructor(private formBuilder:FormBuilder,private router:Router,private iposervice:IpoService) { }

  ngOnInit() {
    this.addipoForm=this.formBuilder.group({
      companyid:['',Validators.required],
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      pricepershare:['',Validators.required],
      totalnoofshares:['',Validators.required]
      
    });
  }
    addIPO()
  {
    this.ipoService.saveIPO(this.addipoForm.value).subscribe(data =>{
      console.log('IPO Inserted Successfully');
    });

  }

}

