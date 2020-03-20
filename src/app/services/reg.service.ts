import { Injectable } from '@angular/core';
import { Common } from '../common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { retry, catchError } from 'rxjs/operators';
import { HandleError } from '../handle-error';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  awsRegUrl = 'https://kpj57ajajb.execute-api.eu-west-1.amazonaws.com/dev/users/add';

  constructor(private common: Common, private http: HttpClient, private handleError: HandleError) { }

  userReg(userData): Observable<User> {
    return this.http.post<User>(this.awsRegUrl, userData)
    .pipe(retry(1),
    catchError(this.handleError.handleError));
  }
}
