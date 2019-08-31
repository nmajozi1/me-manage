import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboards: [] = [];

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getDashboard().subscribe(response => {

      if (response.data.length > 0) {
        this.dashboards = response.data;
      } else {
        this.router.navigate(['']);
      }

    });
  }

  route(path): void {
    this.router.navigate([path]);
  }

}
