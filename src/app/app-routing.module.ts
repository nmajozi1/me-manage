import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetGoalsComponent } from './set-goals/set-goals.component';
import { RefreshComponent } from './refresh/refresh.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { RefreshGoalComponent } from './refresh-goal/refresh-goal.component';
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ChartComponent } from './chart/chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'set-goals', component: SetGoalsComponent},
  {path: 'side-nav', component: SideNavComponent},
  {path: 'refresh', component: RefreshComponent},
  {path: 'refreshGoal', component: RefreshGoalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponentComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'columnChart', component: ColumnChartComponent},
  {path: 'pie', component: PieChartComponent},
  {path: 'bar', component: BarChartComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
