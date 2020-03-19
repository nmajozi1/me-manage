import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  chart$: Observable<Chart>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.initialiseChart();
  }

  initialiseChart() {
    this.generateChart().subscribe(res => {
      this.chart$ = res;
    });
  }

  generateChart(): Observable<any> {
    return this.dashboardService.getDashboardData({username: 'ntokozo'}).pipe(
      map(results => {
        const options: any = {
          chart: {
            type: 'column'
          },
          xAxis: {
            visible: true,
            categories: results.data.map(item => item.item)
          },
          yAxis: {
            visible: false,
          },
          title: {
            text: ''
          },
          legend: {
            enabled: false,
            reversed: false
          },
          tooltip: {
            enabled: false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            column: {
              dataLabels: {
                enabled: true,
                borderRadius: 10,
                style: {
                  fontWeight: 'bold',
                  color: 'black',
                }
              },
            }
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'List',
              data: results.data.map((item, index) => ({
                x: index,
                y: item.amount,
                name: item.item
              }))
            }
          ]
        };

        return new Chart(options);
      })
    );
  }

}
