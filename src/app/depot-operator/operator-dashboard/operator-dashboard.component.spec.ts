import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDashboardComponent } from './operator-dashboard.component';

describe('OperatorDashboardComponent', () => {
  let component: OperatorDashboardComponent;
  let fixture: ComponentFixture<OperatorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
