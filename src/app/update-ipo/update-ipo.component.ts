import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from '../ipo.service';
import { Router } from '@angular/router';
import { IPO } from '../models/ipos';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  updateipoForm: FormGroup;
 

  constructor(private formBuilder:FormBuilder,private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.updateipoForm=this.formBuilder.group({
      id:['',Validators.required],
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      pricepershare:['',Validators.required],
      totalnoofshares:['',Validators.required],
      opendatetime:['',Validators.required]
     
    });
    const id=localStorage.getItem('ipoId');
    if(+id>0){
      this.ipoService.getIPOById(+id).subscribe(ipo =>{
        this.updateipoForm.patchValue(ipo);
      });
    }
    
    }
updateTheIPO(ipo:IPO){
      this.ipoService.updateIPOInfo(this.updateipoForm.value).subscribe( u => {
        this.router.navigate(['/iposlist']);
      });
  }
}
