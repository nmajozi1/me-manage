import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SetGoalService } from '../services/set-goal.service';
import { RefreshGoalComponent } from '../refresh-goal/refresh-goal.component';

export interface DialogData {
  goal: string;
  amount: number;
  purchased: boolean;
}

@Component({
  selector: 'app-set-goal-modal',
  templateUrl: './set-goal-modal.component.html',
  styleUrls: ['./set-goal-modal.component.css']
})
export class SetGoalModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SetGoalModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public setGoalsService: SetGoalService) { }

  onCancel() {
    this.dialogRef.close();
  }

  submit() {
    this.setGoalsService.createGoal(this.data)
    .subscribe(response => {
      console.log(response);
      this.dialogRef.close();
      this.onRefresh();
    });
  }

  onRefresh() {
    this.setGoalsService.refresh();
  }

  ngOnInit() {
  }

}
