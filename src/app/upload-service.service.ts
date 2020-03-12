import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  //httpUrl="http://localhost:8005/stockprice/"
  httpUrl= environment.host + "stock-price-service/stockprice"

  constructor(private httpClient:HttpClient) { }
  uploadStocksSheet(formData:FormData):Observable<void>{
    return this.httpClient.post<void>(this.httpUrl+"uploadStocksSheet",formData);
  }
}
