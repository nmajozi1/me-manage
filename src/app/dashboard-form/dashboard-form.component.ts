import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BUDGET } from '../budget-items';
import { BillsService } from '../bills.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardFormComponent implements OnInit {
  add = '+';

  count = 0;

  budgetItems = BUDGET;

  addBillItem() {
    // console.log('INIT RESP: ', this.billService.getBudgetItems());
    console.log('add bill item');
    this.router.navigate(['set-goals']);
  }

  constructor(
    private http: HttpClient,
    private billService: BillsService,
    private router: Router
    ) {
    let sum = 0;
    for (const item of this.budgetItems) {
      sum = sum + item.amount;
    }

    this.count = sum;
  }

  ngOnInit() {
  }

}
