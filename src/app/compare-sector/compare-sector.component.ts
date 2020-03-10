import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-compare-sector',
  templateUrl: './compare-sector.component.html',
  styleUrls: ['./compare-sector.component.css']
})
export class CompareSectorComponent implements OnInit {
comparesectorForm:FormGroup;
submit()
{
  console.log(this.comparesectorForm.value);
}

  constructor(private formBuilder:FormBuilder)
   { }

  ngOnInit() {
    this.comparesectorForm=this.formBuilder.group({
      companyid:['',Validators.required],
      sectorname:['',Validators.required],
      brief:['',Validators.required]
    })
  }

}
