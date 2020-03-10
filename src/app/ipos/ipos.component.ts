import { Component, OnInit } from '@angular/core';
import { IPO } from '../models/ipos';
import { IpoService } from '../ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {
  ipos:IPO[];
  constructor(private iposService:IpoService,private router:Router) { }

  ngOnInit() {
    this.iposService.getALLIPOs().subscribe(data => {
      this.ipos = data;
    });
  }
  deleteIPO(id:number){
    this.iposService.deleteIPO(id).subscribe(data =>{
      this.ipos=this.ipos.filter(u => u.id!==id);
    });
    
  }
  updateIPO(ipos:IPO)
  {
    localStorage.removeItem('ipoId');
    localStorage.setItem('ipoId',ipos.id.toString());
    this.router.navigate(['/update-ipo']);
  }

}
