import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshGoalComponent } from './refresh-goal.component';

describe('RefreshGoalComponent', () => {
  let component: RefreshGoalComponent;
  let fixture: ComponentFixture<RefreshGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
