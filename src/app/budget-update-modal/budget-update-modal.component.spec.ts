import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetUpdateModalComponent } from './budget-update-modal.component';

describe('BudgetUpdateModalComponent', () => {
  let component: BudgetUpdateModalComponent;
  let fixture: ComponentFixture<BudgetUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
