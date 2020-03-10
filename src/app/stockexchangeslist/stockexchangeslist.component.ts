import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockexchangeService } from '../stockexchange.service';
import { StockExchange } from '../models/stockexchange';

@Component({
  selector: 'app-stockexchangeslist',
  templateUrl: './stockexchangeslist.component.html',
  styleUrls: ['./stockexchangeslist.component.css']
})
export class StockexchangeslistComponent implements OnInit {

  constructor(private router:Router,private stockExchangeService:StockexchangeService) { }
  stockexchanges:StockExchange[]

  ngOnInit() {
    this.stockExchangeService.getALLStockExchanges().subscribe(data => {
      this.stockexchanges = data;
    });
  
  }
  deleteStockExchange(stockExchange:StockExchange){
    this.stockExchangeService.deleteStockExchange(stockExchange.id).subscribe(data =>{
      this.stockexchanges=this.stockexchanges.filter(u => u!=stockExchange );
    });
    
    }
    updateStockExchange(stockExchange:StockExchange)
  {
    localStorage.removeItem('stockexchangeId');
    localStorage.setItem('stockexchangeId',stockExchange.id.toString());
    this.router.navigate(['/update-stockexchange']);
  }

}
