import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ManageCompaniesComponent } from '../manage-companies/manage-companies.component';
import { CompanyService } from '../company.service';
import { Company } from '../models/companies';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
comparisonForm:FormGroup;
companies:Company[]
onSubmit()
{
  this.router.navigate(['/displaycharts'])
  queryParams:{
    formData:JSON.stringify(this.comparisonForm.value)
  }
}
  constructor(private formBuilder:FormBuilder,private router:Router,private companyService:CompanyService) { }

  ngOnInit() {
    this.comparisonForm=this.formBuilder.group({
      selectcompany1:[''],
      selectcompany2:[''],
      selectstockexchange:['',Validators.required],
      fromperiod:['',Validators.required],
      toperiod:['',Validators.required]
    })
    this.companyService.getALLCompanies().subscribe(data=>{
      this.companies=data;
    })
  }

}
