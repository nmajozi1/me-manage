import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dashboards: [] = [];

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getDash().subscribe(response => {
      this.dashboards = response.data;
    });
  }

  goalItem(item): void {
    this.router.navigate([item]);
  }

}
