import { Component, OnInit } from '@angular/core';

// import { ApexTitleSubtitle, ApexChart, ApexAxisChartSeries } from "ng-apexcharts";

 

@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /* title: ApexTitleSubtitle;
  chart: ApexChart;
  series: ApexAxisChartSeries; */
  
 
  
  /* constructor() {
    this.title = {text: 'hello'};
    this.chart = {  width: 500,
                    height: 200,
                    type: "bar"};
    this.series =  [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ]; */
    datadoughnut: any;
    
    dataSource: any;
  constructor() {
    this.dataSource = {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
          label: "Company1",
          backgroundColor: "blue",
          data: [25, 30, 60, 50, 80, 90],
          borderRadius: 1
        },
        {
          label: "Company2",
          backgroundColor: "#6E35DA",
          data: [45, 33, 70, 72, 95]
        }
      ]
    };
  }
  basicData: any;
  basicData1: any;
  
  ngOnInit(): void{
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
         
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4,
              
          }
      ]
  };
  //second line chart
  this.basicData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
       
        {
           
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#fff',
            tension: .4
        }
    ]
};
//doghnuts chart
this.datadoughnut = {
 
  datasets: [
      {
          data: [300, 50, 100],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              
          ],
          borderColor: [
            "#FF6384",
              "#36A2EB",
              "#FFCE56",
        ],
        
          
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ],
          borderWidth: 0.1
      }]    
  };
  }


  


  
}
  
     
  
  

  



