import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-refresh-goal',
  templateUrl: './refresh-goal.component.html',
  styleUrls: ['./refresh-goal.component.css']
})
export class RefreshGoalComponent implements OnInit {

  constructor(private router: Router, private refreshService: RefreshService) { }

  ngOnInit() {
    this.refreshService.refreshSetGoal();
  }

}
