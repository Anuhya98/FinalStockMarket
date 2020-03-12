import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './models/companies';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  //httpUrl = 'http://localhost:8002/company/';
  httpUrl=environment.host+"company-service/company/"

  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  getALLCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
   saveCompany(company:Company):Observable<Company>{
    //return this.httpClient.post<Company>(this.httpUrl,company);
    return this.httpClient.post<Company>(this.httpUrl,company);
   }
   deleteCompany(id : number):Observable<Company>{
    return this.ht.delete(this.httpUrl+id);
  }
  updateCompanyInfo(company:Company):Observable<Company>{
    return this.ht.put(this.httpUrl,company);
  }
  getCompanyById(id:number):Observable<Company>{
   return this.ht.get(this.httpUrl+id);
  }

   
}
