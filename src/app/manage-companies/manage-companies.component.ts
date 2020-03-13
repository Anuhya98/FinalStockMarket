import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  managecompanyForm:FormGroup;
  submit()
{
  console.log(this.managecompanyForm.value);
}
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private router:Router) { }

  ngOnInit() {
    this.managecompanyForm=this.formBuilder.group({
      id:['',Validators.required],
      companyCode:['',Validators.required],
      companyname:['',Validators.required],
      turnover:['',Validators.required],
      companyceoname:['',Validators.required],
      boardofdirectors:['',Validators.required],
      selectstockexchange:['',Validators.required],
      selectsector:['',Validators.required],
      aboutcompany:['',Validators.required]
    })
  }

  addCompany(){
    this.companyService.saveCompany(this.managecompanyForm.value).subscribe(data =>{
     console.log('Company Inserted Successfully');
     this.router.navigate(['/displaycompanies']);
     });
   }

}
