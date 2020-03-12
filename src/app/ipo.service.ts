import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpoComponent } from './ipo/ipo.component';
import { IPO } from './models/ipos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
 // httpUrl = 'http://localhost:8003/ipo/';
 httpUrl=environment.host+"initial-public-offering-service/ipo/"

  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  getALLIPOs(): Observable<IPO[]> {
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }
  saveIPO(ipos:IPO):Observable<IPO>{
    //return this.httpClient.post<IPO>(this.httpUrl,ipos);
    return this.httpClient.post<IPO>(this.httpUrl,ipos);
  }
  deleteIPO(id : number):Observable<IPO>{
   return this.ht.delete(this.httpUrl+id);
 // return this.ht.delete(`http://localhost:8003/ipo/${id}`);

  }
  updateIPOInfo(ipo:IPO):Observable<IPO>{
    //return this.ht.put(`http://localhost:8003/updateipo`,ipo);
    return this.ht.put(this.httpUrl,ipo);
  }
  getIPOById(id:number):Observable<IPO>{
    //return this.httpClient.get<IPO>(this.httpUrl+id);
    return this.ht.get(this.httpUrl+id);
  }
}
