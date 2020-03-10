import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../models/companies';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
updatecompanyForm:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder,private companyService:CompanyService) { }

  ngOnInit() {
    this.updatecompanyForm=this.formBuilder.group({
      id:['',Validators.required],
      companyname:['',Validators.required],
      turnover:['',Validators.required],
      companyceoname:['',Validators.required],
      boardofdirectors:['',Validators.required],
      selectstockexchange:['',Validators.required],
      selectsector:['',Validators.required],
      aboutcompany:['',Validators.required]
    });
    const id=localStorage.getItem('companyId');
    if(+id>0){
      this.companyService.getCompanyById(+id).subscribe(company =>{
        this.updatecompanyForm.patchValue(company);
      });
    }
  }
  
  updateTheCompany(company:Company){
    this.companyService.updateCompanyInfo(this.updatecompanyForm.value).subscribe( u => {
      this.router.navigate(['/displaycompanies']);
    });
  }

}
