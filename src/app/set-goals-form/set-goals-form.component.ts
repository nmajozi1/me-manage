import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GOAL } from '../goal-items';
import { SetGoalService } from '../services/set-goal.service';
import { SetGoalModalComponent } from '../set-goal-modal/set-goal-modal.component';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { AppState, getMyBudget } from '../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-goals-form',
  templateUrl: './set-goals-form.component.html',
  styleUrls: ['./set-goals-form.component.css']
})
export class SetGoalsFormComponent implements OnInit {

  add = '+';

  count = 0;
  goalList: any = [];
  setGoal$: Observable<any>;

  constructor(
    private goalService: SetGoalService,
    public dialog: MatDialog,
    private store: Store<AppState>
    ) {}

  addBillItem() {
    const dialogRef = this.dialog.open(SetGoalModalComponent, {
      width: '250px',
      height: '350px',
      data: {goal: '', amount: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  refineData() {
    let sum = 0;
    for (const item of this.goalList.data) {
      sum = sum + item.amount;
    }

    console.log('SUM: ', sum);
    this.count = sum;
  }

  getGoalData() {
    this.goalService.getGoals()
    .subscribe(response => {
      this.goalList = response;

      this.refineData();
    });
  }

  ngOnInit() {
    this.setGoal$ = this.store.pipe(select(getMyBudget));

    this.setGoal$.subscribe(setGoalData => {
      if (setGoalData.setGoalData) {
        this.goalList = setGoalData.setGoalData;

        this.refineData();
      }
    });
  }

}
