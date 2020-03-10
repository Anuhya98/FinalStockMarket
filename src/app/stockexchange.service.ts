import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { StockExchange } from './models/stockexchange';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  httpUrl = 'http://localhost:8004/stockexchange/';

  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  getALLStockExchanges(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }
   
  saveStockExchange(stockExchange:StockExchange):Observable<StockExchange>{
    return this.httpClient.post<StockExchange>(this.httpUrl,stockExchange);
  }
  deleteStockExchange(id : number):Observable<StockExchange>{
    //return this.httpClient.delete<StockExchange>(this.httpUrl + id);
    return this.ht.delete(`http://localhost:8004/stockexchange/${id}`);
  }
  updateStockExchangeInfo(stockExchange:StockExchange):Observable<StockExchange>{
    //return this.httpClient.put<StockExchange>(this.httpUrl+stockExchange.id,stockExchange);
    return this.ht.put(`http://localhost:8004/updatestockexchange`,stockExchange);
  }
  getStockExchangeById(id:number):Observable<StockExchange>{
     //return this.httpClient.get<StockExchange>(this.httpUrl+id);
    return this.ht.get(`http://localhost:8004/stockexchange/${id}`)
   }
}
