import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyBudget } from '../app.state';
import { GetNewBudget, GetNewGoal } from './state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboards: [] = [];
  budget$: Observable<any>;
  goals$: Observable<any>;

  constructor(private router: Router, private homeService: HomeService, private store: Store<AppState>) { }

  ngOnInit() {

    this.newBudget();
    this.newGoals();

    this.budget$ = this.store.pipe(select(getMyBudget));
    this.goals$ = this.store.pipe(select(getMyBudget));

    this.goals$.subscribe(goals => {
      if (goals.data) {
        this.dashboards = goals.data.data;
      }
    })
  }

  newBudget() {
    this.store.dispatch(new GetNewBudget(null));
  }

  newGoals() {
    this.store.dispatch(new GetNewGoal(null));
  }

  route(path): void {
    this.router.navigate([path]);
  }

}
