import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';
import { TestComponentComponent } from '../test-component/test-component.component';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent implements OnInit {

  @Output() testOutput: EventEmitter<any> = new EventEmitter();

  testValue = 'Test Value';

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    public data: User,
    public testComponent: TestComponentComponent,
    ) {}

  // name = new FormControl('');

  login(): void {
    console.log(this.data);
    this.loginService.login(this.data)
    .subscribe((response) => {
      console.log('RESPONSE: ', response);
      this.router.navigate(['home']);
    });

    // console.warn(this.loginForm.value);
  }

  testSubject() {
    console.log('Am I being called?');
    // this.test.emit();
  }

  register() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
