import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListModalComponent } from './budget-list-modal.component';

describe('BudgetListModalComponent', () => {
  let component: BudgetListModalComponent;
  let fixture: ComponentFixture<BudgetListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
