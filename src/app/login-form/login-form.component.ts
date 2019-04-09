import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login() {
    this.loginService.login().subscribe(res => {
      console.log('RES: ', res);
      this.router.navigate(['/dashboard']);
    });
  }

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
  }

}
