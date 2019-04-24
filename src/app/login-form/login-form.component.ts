import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  // Employee: any = [];

  constructor(private router: Router, private loginService: LoginService, private http: HttpClient, public data: User) {}

  login(): void {
    this.loginService.login(this.data)
    .subscribe((response) => {
      // this.Employee = data;

      // this.router.navigate(['/dashboard']);
      this.router.navigate(['home']);
    });
  }

  register() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
