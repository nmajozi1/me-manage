import { Component, OnInit } from '@angular/core';
import { BUDGET } from '../budget-items';
import { Router } from '@angular/router';
import { BudgetList } from '../budget-list';

import { DashboardService } from '../services/dashboard.service';
import { BudgetListModalComponent } from '../budget-list-modal/budget-list-modal.component';
import { BudgetUpdateModalComponent } from '../budget-update-modal/budget-update-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardFormComponent implements OnInit {
  add: any = '+';
  count: any = 0;
  countPaid: any = 0;
  countUnpaid: any = 0;
  difference: any = 0;
  BudjetList: any = [];

  item: string;
  amount: number;

  color = 'accent';
  disabled = false;

  constructor(private router: Router, private dashboardService: DashboardService, public dialog: MatDialog) {}

  addBillItem(): void {
    const dialogRef = this.dialog.open(BudgetListModalComponent, {
      width: '250px',
      data: {item: '', amount: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  upadetItem(data): void {
    const dialogRef = this.dialog.open(BudgetUpdateModalComponent, {
      width: '300px',
      height: '350px',
      data: {item: data.item, amount: data.amount, payment: data.payment}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Dialogue has been closed.');
    });
  }

  refineData() {
    let sum = 0;
    let paidSum = 0;
    let unpaidSum = 0;

    for (const item of this.BudjetList.data) {
      sum = sum + item.amount;

      if (item.payment) {
        paidSum = paidSum + item.amount;
      }

      if (!item.payment) {
        unpaidSum = unpaidSum + item.amount;
      }
    }

    this.count = sum;
    this.countPaid = paidSum;
    this.countUnpaid = unpaidSum;
    if (this.countUnpaid > this.countPaid) {
      this.difference = this.countUnpaid - this.countPaid;
    } else if (this.countPaid > this.countUnpaid) {
      this.difference = this.countPaid - this.countUnpaid;
    } else {
      this.difference = this.countPaid - this.countUnpaid;
    }
  }

  payedUpdate(updateData) {
    this.dashboardService.payedUpdate(updateData)
    .subscribe(response => {
      console.log(response);
      this.onRefresh();
    });
  }

  onRefresh() {
    // this.dashboardService.refreshPage();
    this.getDashData();
  }

  getDashData(): void {
    this.dashboardService.getDashboardData()
    .subscribe((response: {}) => {

      this.BudjetList = response;

      this.refineData();
    });
  }

  ngOnInit() {
    this.dashboardService.getDashboardData()
    .subscribe((response: {}) => {

      this.BudjetList = response;

      this.refineData();
    });
  }
}
