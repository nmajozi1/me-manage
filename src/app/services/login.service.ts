import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
{
    "success": true,
    "message": "Success, found user",
    "data": {
        "name": "Ntokozo",
        "surname": "Majozi",
        "email": "ntokozo.majozi5@gmail.com",
        "username": "ntokozo",
        "password": "password",
        "_id": "5ca9cb9a7d8a320989c73acb",
        "__v": 0
    }
}
*/

class User {
  success: string;
  message: string;
  data: {
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    _id: string;
    _v: number;
  };
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const inputData = {
  username: 'ntokozo',
  password: 'password'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:9900/login';

  login() {

    // this.router.navigate(['/dashboard']);
    return this.http.post<any>(this.url, inputData, httpOptions);
    // .subscribe(response => {
    //   console.log('The Response: ', response);
    // });
  }

  constructor(private router: Router, private http: HttpClient) { }
}

