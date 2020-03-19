import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getMyBudget } from './app.state';
import { GetNewBudget, GetNewGoal, GetNewSetGoal } from './home/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bored';
  loginData$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loginData$ = this.store.select(getMyBudget);
    // this.newBudget();
    // this.newGoals();
    // this.setGoal();
  }

  newBudget() {
    this.loginData$.subscribe(res => {
      if (res.user.userDetails) {
        const userData = { username: res.user.userDetails.data.username };
        this.store.dispatch(new GetNewBudget(userData));
      }
    });
  }

  newGoals() {
    this.loginData$.subscribe(res => {
      if (res.userDetails) {
        this.store.dispatch(new GetNewGoal(null));
      }
    });
  }

  setGoal() {
    this.loginData$.subscribe(res => {
      if (res.userDetails) {
        const userData = { username: res.userDetails.data.username };
        this.store.dispatch(new GetNewSetGoal(userData));
      }
    });
  }
}
