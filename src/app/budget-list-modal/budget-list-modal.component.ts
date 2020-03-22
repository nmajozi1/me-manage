import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, getMyBudget } from '../app.state';
import { AddBudgetListItem } from '../home/state';
import { take } from 'rxjs/operators';

export interface DialogData {
  item: string;
  amount: number;
}

@Component({
  selector: 'app-budget-list-modal',
  templateUrl: './budget-list-modal.component.html',
  styleUrls: ['./budget-list-modal.component.css']
})
export class BudgetListModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BudgetListModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dashBoardService: DashboardService,
    private router: Router,
    private store: Store<AppState>,
    ) { }

  onCancel() {
    this.dialogRef.close();
  }

  submit() {

    this.store.select(getMyBudget).pipe(take(1)).subscribe(userData => {

      const addBudgetData = {
        TableName: 'budgets',
        Item: {
          amount: +this.data.amount,
          item: this.data.item,
          payment: true,
          username: userData.user.userDetails.data.username
        }
      };

      this.store.dispatch(new AddBudgetListItem(addBudgetData));

      this.dialogRef.close();

    });

  }

  ngOnInit() {
  }

}
