import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAllComponent } from './manager-all.component';

describe('ManagerAllComponent', () => {
  let component: ManagerAllComponent;
  let fixture: ComponentFixture<ManagerAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
