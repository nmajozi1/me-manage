import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

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
    return this.dashboardService.getDashboardData().pipe(
      map(results => {
        const options: any = {
          chart: {
            type: 'pie'
          },
          xAxis: {
            visible: true,
          },
          yAxis: {
            visible: true,
          },
          title: {
            text: ''
          },
          legend: {
            reversed: false
          },
          tooltip: {
            enabled: true,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                  fontWeight: 'bold',
                  color: 'white'
                }
              },
              size: 300
            }
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Percentage',
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
