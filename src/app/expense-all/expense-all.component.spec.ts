import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAllComponent } from './expense-all.component';

describe('ExpenseAllComponent', () => {
  let component: ExpenseAllComponent;
  let fixture: ComponentFixture<ExpenseAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
