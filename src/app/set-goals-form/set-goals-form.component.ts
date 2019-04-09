import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GOAL } from '../goal-items';

@Component({
  selector: 'app-set-goals-form',
  templateUrl: './set-goals-form.component.html',
  styleUrls: ['./set-goals-form.component.css']
})
export class SetGoalsFormComponent implements OnInit {

  add = '+';

  count = 0;

  goalItems = GOAL;

  addBillItem() {
    // console.log('INIT RESP: ', this.billService.getBudgetItems());
    console.log('add bill item');
    this.router.navigate(['/side-nav']);
  }

  constructor(private http: HttpClient, private router: Router) {
    let sum = 0;
    for (const item of this.goalItems) {
      sum = sum + item.amount;
    }

    this.count = sum;
  }

  ngOnInit() {
  }

}
