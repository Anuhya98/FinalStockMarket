import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockexchangeService } from '../stockexchange.service';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {
stockExchangeForm:FormGroup;
submit()
{
  console.log(this.stockExchangeForm.value);
}
  constructor(private formBuilder:FormBuilder,private router:Router,private stockExchangeService:StockexchangeService) { }

  ngOnInit() {
    this.stockExchangeForm=this.formBuilder.group({
      id:['',Validators.required],
      stockexchange:['',Validators.required],
      brief:['',Validators.required],
      contactaddress:['',Validators.required],
      remarks:['',Validators.required]
    });
  }
  addStockexchange(){
    this.stockExchangeService.saveStockExchange(this.stockExchangeForm.value).subscribe(data =>{
     console.log('StockExchange Inserted Successfully');
     this.router.navigate(['/displaystockexchanges'])
     });
   }
 

}
