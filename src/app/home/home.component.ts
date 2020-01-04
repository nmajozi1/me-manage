import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyBudget } from '../app.state';
import { GetNewBudget, GetNewGoal, GetNewSetGoal } from './state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboards: [] = [];
  goals$: Observable<any>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {

    this.goals$ = this.store.pipe(select(getMyBudget));

    this.goals$.subscribe(goals => {
      if (goals.data) {
        this.dashboards = goals.data.data;
      }
    });
  }

  route(path): void {
    this.router.navigate([path]);
  }

}
