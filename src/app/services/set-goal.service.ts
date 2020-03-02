import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoalList } from '../goal-list';
import { Common } from '../common';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HandleError } from '../handle-error';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class SetGoalService {

  constructor(private http: HttpClient, private common: Common, private handleError: HandleError, private router: Router) { }

  getGoals(): Observable<GoalList> {
    console.log('URL: ', this.common.awsBaseUrl + this.common.getGoals);
    return this.http.post<GoalList>(this.common.awsBaseUrl + this.common.getGoals, { username: 'ntokozo' })
    .pipe(retry(1),
    catchError(this.handleError.handleError));
  }

  createGoal(goalData: GoalList): Observable<GoalList> {
    return this.http.post<GoalList>(this.common.baseUrl + this.common.createGoals, goalData)
    .pipe(retry(1),
    catchError(this.handleError.handleError));
  }

  refresh() {
    this.router.navigate(['refreshGoal']);
  }
}
