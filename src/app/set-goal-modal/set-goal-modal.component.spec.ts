import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGoalModalComponent } from './set-goal-modal.component';

describe('SetGoalModalComponent', () => {
  let component: SetGoalModalComponent;
  let fixture: ComponentFixture<SetGoalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGoalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGoalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
