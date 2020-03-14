import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as Highcharts from 'highcharts';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn:boolean=false;

  title = 'stockexchange';
  app: FormGroup;
  constructor(private authService:AuthService){}
  ngDoCheck(){
    this.userLoggedIn = this.authService.isUserLoggedIn();
  }
}

