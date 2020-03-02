import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private awsLoginUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/users/login';

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<User> {
    console.log('Login Data: ', data);
    return this.http.post<User>(this.awsLoginUrl, data)
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

