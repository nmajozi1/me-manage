import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  budgetList(): void {
    this.router.navigate(['dashboard']);
  }

  goalList(): void {
    console.log(`set goals`);
    this.router.navigate(['set-goals']);
  }

  personalGoals(): void {
    console.log(`personal Goal`);
  }

}
