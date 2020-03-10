import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
comparisonForm:FormGroup;
submit()
{
  console.log(this.comparisonForm.value);
}
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.comparisonForm=this.formBuilder.group({
      selectsector:['',Validators.required],
      selectstockexchange:['',Validators.required],
      companyname:['',Validators.required],
      fromperiod:['',Validators.required],
      toperiod:['',Validators.required]
    })
  }

}
