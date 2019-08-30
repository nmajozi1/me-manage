import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getDash(): Observable<any> {
    return this.http.get('http://localhost:9900/getDashboard').pipe(retry(1), catchError(this.handleError));
  }

  public createDash(dashData: any): Observable<any> {
    return this.http.post('http://localhost:9900/createDashboard', dashData).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof error) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessages: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
