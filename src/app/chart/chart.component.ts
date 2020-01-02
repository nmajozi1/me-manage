import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../services/dashboard.service';
import { map, take, tap, takeLast } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart$: Observable<Chart>;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.column().subscribe(chart => {
      this.chart$ = chart;
    });
  }

}
