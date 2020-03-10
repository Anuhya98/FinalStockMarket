import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UploadServiceService } from '../upload-service.service';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportdataComponent implements OnInit {
  uploadExcelForm:FormGroup;
file:File;
  constructor(private uploadService:UploadServiceService) {
  
   }

  ngOnInit() {
    //bsCustomFileInput.init();
    this.uploadExcelForm=new FormGroup({
      excelFileUpload:new FormControl("",[Validators.required])
    })
  }
  onFileChange(e){
    this.file=e.target.files[0];
  }

  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stocksSheet",this.file,this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(
      data=>{
        console.log("Uploaded");
      }
    );
  
  }

}
