import { Component, OnInit, Inject } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.dashboardService.updateItem(this.data)
    .subscribe(response => {
      console.log(response);

      this.dialogRef.close();
      this.onRefresh();
    });
  }

  remove() {

    const itemToRemove = {
      TableName: 'budgets',
      Key: {
        id: this.data.id
      }
    };

    this.dashboardService.deleteItem(itemToRemove)
    .subscribe(response => {
      this.dialogRef.close();

      this.onRefresh();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onRefresh() {
    this.dashboardService.refreshPage();
  }

}
