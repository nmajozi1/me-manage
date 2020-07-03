import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatSidenavModule,
  MatDialogModule,
  MatSlideToggleModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { SetGoalsComponent } from './set-goals/set-goals.component';
import { SetGoalsFormComponent } from './set-goals-form/set-goals-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BudgetListModalComponent } from './budget-list-modal/budget-list-modal.component';
import { RefreshComponent } from './refresh/refresh.component';
import { BudgetUpdateModalComponent } from './budget-update-modal/budget-update-modal.component';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { SetGoalModalComponent } from './set-goal-modal/set-goal-modal.component';
import { Common } from './common';
import { HandleError } from './handle-error';
import { RefreshGoalComponent } from './refresh-goal/refresh-goal.component';
import { User } from './user';
import { HomeComponent } from './home/home.component';
import { GridRowsComponent } from './grid-rows/grid-rows.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ChartComponent } from './chart/chart.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initialState, reducers, effects } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegFormComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardFormComponent,
    SetGoalsComponent,
    SetGoalsFormComponent,
    SideNavComponent,
    NavBarComponent,
    BudgetListModalComponent,
    RefreshComponent,
    BudgetUpdateModalComponent,
    GenericDialogComponent,
    SetGoalModalComponent,
    RefreshGoalComponent,
    HomeComponent,
    GridRowsComponent,
    CalculatorComponent,
    ErrorHandlerComponent,
    TestComponentComponent,
    ChartComponent,
    ColumnChartComponent,
    PieChartComponent,
    BarChartComponent,
    ErrorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    ChartModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, {initialState}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents: [BudgetListModalComponent, BudgetUpdateModalComponent, SetGoalModalComponent, CalculatorComponent, ErrorModalComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] },
    Common, HandleError, User, TestComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
