import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map, tap, filter, take } from 'rxjs/operators';
import { AppState, getMyBudget } from '../app.state';
import { GetNewBudget, GetNewGoal, GetNewSetGoal } from './state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  dashboards: [] = [];
  goals$: Observable<any>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.goals$ = this.store.pipe(select(getMyBudget));
    setTimeout(() => {
      this.store.select(getMyBudget).pipe(take(1)).subscribe(goals => {
        if (goals.budget.dashData) {
          console.log('DO NOTHING! ');
        } else {
          try {
            const userData = { username: goals.user.userDetails.data.username };
            this.store.dispatch(new GetNewBudget(userData));
            this.store.dispatch(new GetNewGoal(null));
            this.store.dispatch(new GetNewSetGoal(userData));
          } catch (error) {
            console.log(error);
          }
        }
      });
      this.goals$.subscribe(res => {
        if (res.budget.dashData) {
          this.dashboards = res.budget.dashData.data;
        }
      });
    }, 1);
  }

  route(path): void {
    this.router.navigate([path]);
  }

}
