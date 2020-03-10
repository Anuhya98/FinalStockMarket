import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
  stockpriceForm:FormGroup
submit(){
  console.log(this.stockpriceForm.value);
}
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.stockpriceForm=this.formBuilder.group({
      companyid:['',Validators.required],
      stockexchange:['',Validators.required],
      currentprice:['',Validators.required]
    })

  }

}
