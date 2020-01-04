import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { GetNewBudget, GetNewGoal, GetNewSetGoal } from './home/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bored';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.newBudget();
    this.newGoals();
    this.setGoal();
  }

  newBudget() {
    this.store.dispatch(new GetNewBudget(null));
  }

  newGoals() {
    this.store.dispatch(new GetNewGoal(null));
  }

  setGoal() {
    this.store.dispatch(new GetNewSetGoal(null));
  }
}
