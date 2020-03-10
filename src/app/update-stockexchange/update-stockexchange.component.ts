import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockexchangeService } from '../stockexchange.service';
import { StockExchange } from '../models/stockexchange';

@Component({
  selector: 'app-update-stockexchange',
  templateUrl: './update-stockexchange.component.html',
  styleUrls: ['./update-stockexchange.component.css']
})
export class UpdateStockexchangeComponent implements OnInit {
  updatestockExchangeForm:FormGroup
  constructor(private router:Router,private formBuilder:FormBuilder,private stockExchangeService:StockexchangeService) { }

  ngOnInit() {
    this.updatestockExchangeForm=this.formBuilder.group({
      id:['',Validators.required],
      stockexchange:['',Validators.required],
      brief:['',Validators.required],
      contactaddress:['',Validators.required],
      remarks:['',Validators.required]
    });
    const id=localStorage.getItem('stockexchangeId');
    if(+id>0){
      this.stockExchangeService.getStockExchangeById(+id).subscribe(stockExchange =>{
        this.updatestockExchangeForm.patchValue(stockExchange);
      });
    }
  }
  updateTheStockexchange(stockExchange:StockExchange){
    this.stockExchangeService.updateStockExchangeInfo(this.updatestockExchangeForm.value).subscribe( u => {
      this.router.navigate(['/displaystockexchanges']);
    });
  }

}
