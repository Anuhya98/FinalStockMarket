import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  httpUrl="http://localhost:8005/stockprice/"

  constructor(private httpClient:HttpClient) { }
  uploadStocksSheet(formData:FormData):Observable<void>{
    return this.httpClient.post<void>(this.httpUrl+"uploadStocksSheet",formData);
  }
}
