import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor(private router: Router) { }

  refreshDashboard() {
    this.router.navigate(['/dashboard']);
  }

  refreshSetGoal() {
    this.router.navigate(['/set-goals']);
  }
}
