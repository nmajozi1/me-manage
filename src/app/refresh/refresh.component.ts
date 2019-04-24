import { Component, OnInit } from '@angular/core';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {

  constructor(private refreshService: RefreshService) { }

  ngOnInit() {
    this.refreshService.refreshDashboard();
  }

}
