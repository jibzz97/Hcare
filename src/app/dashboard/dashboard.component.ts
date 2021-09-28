import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexTitleSubtitle, ApexChart, ApexAxisChartSeries } from "ng-apexcharts";
@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: ApexTitleSubtitle;
  chart: ApexChart;
  series: ApexAxisChartSeries;
  
  constructor() {
    this.title = {text: 'hello'};
    this.chart = {  width: 400,
                    height: 400,
                    type: "line"};
    this.series =  [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ];
  }

  ngOnInit(): void {}
 
}
