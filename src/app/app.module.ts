import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './form/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { UpdateUserComponent } from './update-user/update-user.component';
import { IpoComponent } from './ipo/ipo.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { AddipoComponent } from './addipo/addipo.component';
//import { CompaniesComponent } from './companies/companies.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { IposComponent } from './ipos/ipos.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { ActivateComponent } from './activate/activate.component';
import { StockexchangeslistComponent } from './stockexchangeslist/stockexchangeslist.component';
import { UpdateStockexchangeComponent } from './update-stockexchange/update-stockexchange.component';
import { ComparisonComponent } from './comparison/comparison.component';
//import { AddcompanyComponent } from './addcompany/addcompany.component';
import { HighchartsChartComponent } from "../../node_modules/highcharts-angular";
import { ChartsComponent } from './charts/charts.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    HomeComponent,
    NewcompanyComponent,
    UpdateUserComponent,
    IpoComponent,
    StockpriceComponent,
    ImportdataComponent,
    AddipoComponent,
    //CompaniesComponent,
    UpdateIpoComponent,
    AdminlandingComponent,
    ManageCompaniesComponent,
    CompareSectorComponent,
    UserLandingComponent,
    ManagecompaniesComponent,
    UpdateCompanyComponent,
    IposComponent,
    StockexchangeComponent,
    ActivateComponent,
    StockexchangeslistComponent,
    UpdateStockexchangeComponent,
    ComparisonComponent,
    HighchartsChartComponent,
    ChartsComponent,
    LogoutComponent
    //AddcompanyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
