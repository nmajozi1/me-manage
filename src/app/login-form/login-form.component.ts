import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private loginService: LoginService, private http: HttpClient, public data: User) {}

  // name = new FormControl('');

  login(): void {
    console.log(this.data);
    this.loginService.login(this.data)
    .subscribe((response) => {
      this.router.navigate(['home']);
    });

    // console.warn(this.loginForm.value);
  }

  register() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
