import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BUDGET } from '../budget-items';
import { Router } from '@angular/router';
import { BudgetList } from '../budget-list';

import { DashboardService } from '../services/dashboard.service';
import { BudgetListModalComponent } from '../budget-list-modal/budget-list-modal.component';
import { BudgetUpdateModalComponent } from '../budget-update-modal/budget-update-modal.component';
import { MatDialog } from '@angular/material';
import { CalculatorComponent } from '../calculator/calculator.component';

import { Store, select } from '@ngrx/store';
import { AppState, getMyBudget } from '../app.state';
import { Observable } from 'rxjs';
import { UpdatePayment } from '../home/state';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardFormComponent implements OnInit, AfterViewInit {
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

  budget$: Observable<any>;

  constructor(
    private dashboardService: DashboardService,
    public dialog: MatDialog,
    private store: Store<AppState>
    ) {}

  addBillItem(): void {
    const dialogRef = this.dialog.open(BudgetListModalComponent, {
      width: '250px',
      data: {item: '', amount: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showCalculator(): void {
    const dialogRef = this.dialog.open(CalculatorComponent, {
      width: '220px',
      height: '350px',
      data: {item: '', amount: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('THE CALCULATOR IS CLOSED!');
    });
  }

  upadetItem(data): void {
    const dialogRef = this.dialog.open(BudgetUpdateModalComponent, {
      width: '300px',
      height: '350px',
      data: {item: data.item, amount: data.amount, payment: data.payment, id: data.id}
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

    let payment: boolean;

    if (updateData.payment === false )  { payment = true; } else { payment = false; }

    const updated = {
      TableName: 'budgets',
      Item: {
        id: updateData.id,
        amount: updateData.amount,
        item: updateData.item,
        payment,
        username: updateData.username
      }
    };

    console.log('ITEM: ', updated);
    this.store.dispatch(new UpdatePayment({data: updated}));
  }

  onRefresh() {
    this.getDashData();
  }

  getDashData(): void {
    this.budget$.subscribe(budgetList => {

      if (budgetList.budgetList) {
        this.BudjetList = budgetList.budgetList;

        this.refineData();
      }

    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.store.pipe(select(getMyBudget)).subscribe(budgetList => {
        if (budgetList.budget.budgetList) {

          this.count = 0;
          this.countPaid = 0;
          this.countUnpaid = 0;

          this.BudjetList = budgetList.budget.budgetList.data;

          this.BudjetList.forEach(element => {
            this.count = this.count + element.amount;
            if (element.payment) {
              this.countPaid = this.countPaid + element.amount;
            } else {
              this.countUnpaid = this.countUnpaid + element.amount;
            }
          });
        }
      });
    }, 1);
  }
}
