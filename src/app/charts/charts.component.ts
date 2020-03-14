import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UploadServiceService } from '../upload-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
   compareData: any;
   chartOne = Highcharts;
   chartOneOptions: any;
   getFirstDataComplete: boolean = false;
   getSecondDataComplete: boolean = false;
   constructor(private uploadService:UploadServiceService,private route:ActivatedRoute){}

ngOnInit(){
   this.compareData = JSON.parse(this.route.snapshot.queryParams.formData);
       let series: any = []
           let categories: any[] = [];
           this.uploadService.getCompanyStockPricesBetween(this.compareData.cnsn, this.compareData.selectstockexchange, this.compareData.fromperiod, this.compareData.toperiod).subscribe(data => {
               let companyOneData: any[] = [];
                console.log(data)
               data.forEach((stockPrice) => {
                   categories.push(stockPrice.dataPoint);
                   companyOneData.push(stockPrice.dataValue)
               })
               let seriesDataMemberOne = {
                   name: this.compareData.cnsn + " (" + this.compareData.selectstockexchange + ")",
                   data: companyOneData
               }
               series[0] = seriesDataMemberOne;
               console.log(series);
               this.getFirstDataComplete = true;
           });
           this.uploadService.getCompanyStockPricesBetween(this.compareData.ctcnsn, this.compareData.selectstockexchange, this.compareData.fromperiod, this.compareData.toperiod).subscribe(data => {
            let companyTwoData: any[] = [];
            data.forEach((stockPrice) => {
                if (categories.includes(stockPrice.dataPoint)) {
                    companyTwoData.push(stockPrice.dataValue)
                }
            })
            let seriesDataMemberTwo = {
                name: this.compareData.ctcnsn + " (" + this.compareData.selectstockexchange + ")",
                data: companyTwoData
            }
            series[1] = seriesDataMemberTwo;
            this.getSecondDataComplete = true;
        });
        this.chartOneOptions = {
         chart: {
             type: "column"
         },
         title: {
             text: "Stock Comparision Chart"
         },
         xAxis: {
             categories: categories
         },
         yAxis: {
             title: {
                 text: "Stock Price"
             }
         },
         series: series
     }
  
}

 

}
