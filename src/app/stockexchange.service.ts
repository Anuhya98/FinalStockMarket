import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { StockExchange } from './models/stockexchange';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
 // httpUrl = 'http://localhost:8004/stockexchange/';
 httpUrl=environment.host+ "stock-exchange-service/stockexchange/"

  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  getALLStockExchanges(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }
   
  saveStockExchange(stockExchange:StockExchange):Observable<StockExchange>{
    return this.httpClient.post<StockExchange>(this.httpUrl,stockExchange);
  }
  deleteStockExchange(id : number):Observable<StockExchange>{
    return this.ht.delete(this.httpUrl+id);
  }
  updateStockExchangeInfo(stockExchange:StockExchange):Observable<StockExchange>{
    //return this.ht.put(`http://localhost:8004/updatestockexchange`,stockExchange);
    return this.ht.put(this.httpUrl,stockExchange);
  }
  getStockExchangeById(id:number):Observable<StockExchange>{
    //return this.ht.get(`http://localhost:8004/stockexchange/${id}`)
    return this.ht.get(this.httpUrl+id);
   }
}
