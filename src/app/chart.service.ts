import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { map, take, tap, takeLast } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DashboardService } from './services/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private dashboardService: DashboardService) { }

  column(): Observable<any> {

    return this.dashboardService.getDashboardData().pipe(
      map(results => {
        const options: any = {
          chart: {
            type: 'column'
          },
          xAxis: {
            visible: true,
          },
          yAxis: {
            visible: true,
          },
          title: {
            text: 'bar chart'
          },
          legend: {
            reversed: false
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            column: {
              dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                  fontWeight: 'bold',
                  color: 'white'
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
