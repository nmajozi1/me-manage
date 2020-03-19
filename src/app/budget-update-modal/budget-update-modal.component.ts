import { Component, OnInit, Inject } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState, getMyBudget } from '../app.state';
import { RemoveBudgetListItem, UpdatePayment } from '../home/state';
import { take } from 'rxjs/operators';

export interface DialogData {
  item: string;
  amount: string;
  payment: string;
  id: string;
}

@Component({
  selector: 'app-budget-update-modal',
  templateUrl: './budget-update-modal.component.html',
  styleUrls: ['./budget-update-modal.component.css']
})

export class BudgetUpdateModalComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<BudgetUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
  }

  onSubmit(): void {

    this.store.select(getMyBudget).pipe(take(1)).subscribe(res => {
      const updateData = {
        TableName: 'budgets',
        Item: {
          id: this.data.id,
          amount: +this.data.amount,
          item: this.data.item,
          payment: this.data.payment,
          username: res.user.userDetails.data.username
        }
      };

      this.store.dispatch(new UpdatePayment({ data: updateData }));

      this.dialogRef.close();
    });
  }

  remove() {
    this.store.select(getMyBudget).pipe(take(1)).subscribe(res => {

      const itemToRemove = {
        TableName: 'budgets',
        Key: {
          id: this.data.id,
          username: res.user.userDetails.data.username
        }
      };

      this.store.dispatch(new RemoveBudgetListItem(itemToRemove));

      this.dialogRef.close();

    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onRefresh() {
    this.dashboardService.refreshPage();
  }

}
