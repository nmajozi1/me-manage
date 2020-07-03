import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BudgetList } from '../budget-list';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private awsBudgets = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/get';
  private awsAddListUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/add';
  private awsDeleteListItemUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/delete';
  private awsUpdatePayUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/budget/update';
  private artists = 'http://localhost:3000/dev/artists/get';

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  getDashboardData(data: any): Observable<BudgetList> {
    return this.http.post<any>(this.awsBudgets, data)
    .pipe(retry(0),
    catchError(this.handleError));
  }

  addListItem(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.awsAddListUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  payedUpdate(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.awsUpdatePayUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  deleteItem(data: any): Observable<BudgetList> {
    return this.http.post<BudgetList>(this.awsDeleteListItemUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  public geyArtists(): Observable<any> {
    return this.http.get<any>(this.artists).pipe(retry(1), catchError(this.handleError));
  }

  refreshPage() {
    this.router.navigate(['/refresh']);
  }

  handleError(error: any) {
    console.log('ERROR: ', error.error.message);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessages: ${error.error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

