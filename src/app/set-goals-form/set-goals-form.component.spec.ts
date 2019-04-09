import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGoalsFormComponent } from './set-goals-form.component';

describe('SetGoalsFormComponent', () => {
  let component: SetGoalsFormComponent;
  let fixture: ComponentFixture<SetGoalsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGoalsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGoalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
