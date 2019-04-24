import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

  onCancel() {
    this.dialogRef.close();
  }

  reloadPage() {
    this.dashBoardService.refreshPage();
  }

  submit() {
    this.dashBoardService.addListItem(this.data)
    .subscribe(response => {
      this.dialogRef.close();

      this.reloadPage();
    });
  }

  ngOnInit() {
  }

}
