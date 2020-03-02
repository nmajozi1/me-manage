import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState, getMyBudget } from '../app.state';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  chart$: Observable<Chart>;
  personalGoals$: Observable<any>;

  constructor(private dashboardService: DashboardService, private store: Store<AppState>) { }

  ngOnInit() {
    this.initialiseChart();
  }

  initialiseChart() {
    this.personalGoals$ = this.store.select(getMyBudget);
    this.generateChart().subscribe(res => {
      this.chart$ = res;
    });

    this.personalGoals$.subscribe(res => {
      console.log('THE RESPONSE: ', res.budgetList);
    })
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
