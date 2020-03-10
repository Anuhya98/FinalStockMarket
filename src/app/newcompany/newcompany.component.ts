import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit {
addnewForm:FormGroup;
submit()
{
  console.log(this.addnewForm.value);
}
  constructor() { }

  ngOnInit() {
    this.addnewForm=new FormGroup({
      'companyname':new FormControl(null),
      'iponame':new FormControl(null)
    })
  }

}
