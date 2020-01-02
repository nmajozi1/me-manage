import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetGoalService } from '../services/set-goal.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  chart$: Observable<Chart>;

  constructor(private dashboardService: DashboardService, private setGoalsService: SetGoalService) { }

  ngOnInit() {
    this.initialiseChart();
  }

  initialiseChart() {
    this.generateChart().subscribe(res => {
      this.chart$ = res;
    });
  }

  generateChart(): Observable<any> {
    return this.setGoalsService.getGoals().pipe(
      map(results => {
        const options: any = {
          chart: {
            type: 'bar'
          },
          xAxis: {
            visible: true,
            categories: results.data.map(item => item.goal)
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
            bar: {
              dataLabels: {
                enabled: true,
                style: {
                  fontWeight: 'bold',
                  color: 'black'
                }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%'],
              size: 500
            }
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Test graph',
              data: results.data.map((item, index) => ({
                x: index,
                y: item.amount,
                name: item.goal
              }))
            }
          ]
        };

        return new Chart(options);
      })
    );
  }

}
