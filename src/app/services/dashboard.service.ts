import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BudgetList } from '../budget-list';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // private budgetList = 'getBudgetList';
  // private addListUrl = 'http://localhost:9900/addBudget';
  // private deleteListItem = 'deleteBudget';
  private updatePayUrl = 'http://localhost:9900/updatePayment';
  private updateBudget = 'updateBudget';

  private awsBudgets = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/get';
  private awsAddListUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/add';
  private awsDeleteListItemUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/delete';
  private url = 'http://localhost:9900/';

  constructor(private http: HttpClient, private router: Router) { }

  getDashboardData(): Observable<BudgetList> {
    return this.http.post<any>(this.awsBudgets, {username: 'ntokozo'})
    .pipe(retry(1),
    catchError(this.handleError));
  }

  addListItem(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.awsAddListUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  payedUpdate(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.updatePayUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  updateItem(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.url + this.updateBudget, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  deleteItem(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.awsDeleteListItemUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  refreshPage() {
    this.router.navigate(['/refresh']);
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessages: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
