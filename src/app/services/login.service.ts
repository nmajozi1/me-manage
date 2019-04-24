import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';
import { catchError, map, tap, retry } from 'rxjs/operators';

const inputData = {
  username: 'ntokozo',
  password: 'password'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private getUsers = 'http://localhost:9900/getUsers';
  private loginUrl = 'http://localhost:9900/login';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public login(data: any): Observable<User> {
    return this.http.post<User>(this.loginUrl, data)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  handleError(error) {
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

