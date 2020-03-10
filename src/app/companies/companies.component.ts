// import { Component, OnInit } from '@angular/core';
// import { IPO } from '../models/ipos';
// import { Router } from '@angular/router';
// import { IpoService } from '../ipo.service';

// @Component({
//   selector: 'app-companies',
//   templateUrl: './companies.component.html',
//   styleUrls: ['./companies.component.css']
// })
// export class CompaniesComponent implements OnInit {
//   ipos:IPO[];

//   constructor(private iposService:IpoService,private router:Router) { }

//   ngOnInit() {
//     this.iposService.getALLIPOs().subscribe(data => {
//       this.ipos = data;
//     });

//   }
//   deleteIPO(ipos:IPO){
//     this.iposService.deleteIPO(ipos.companyid).subscribe();
//     this.ipos=this.ipos.filter(u => u!==ipos);
//   }
  


// }
