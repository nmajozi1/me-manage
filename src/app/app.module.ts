import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

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
    HomeComponent
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
    MatSlideToggleModule
  ],
  entryComponents: [BudgetListModalComponent, BudgetUpdateModalComponent, SetGoalModalComponent],
  providers: [Common, HandleError, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
