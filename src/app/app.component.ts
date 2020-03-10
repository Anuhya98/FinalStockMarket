import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockexchange';
  app: FormGroup;
}
