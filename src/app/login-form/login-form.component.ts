import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';
import { TestComponentComponent } from '../test-component/test-component.component';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Login } from '../home/state';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent implements OnInit {

  @Output() testOutput: EventEmitter<any> = new EventEmitter();

  // testValue = 'Test Value';
  header = 'Login';
  TableName = 'Users';

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    public data: User,
    public testComponent: TestComponentComponent,
    private store: Store<AppState>,
    ) {}

  login(): void {
    const md5 = new Md5();
    console.log('HASH: ', md5.appendStr(this.data.password).end());

    const loginData = {
      ...this.data,
      TableName: this.TableName
    };

    this.store.dispatch(new Login(loginData));
  }

  register() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
