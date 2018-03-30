import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateOperatorComponent } from './gate-operator.component';

describe('GateOperatorComponent', () => {
  let component: GateOperatorComponent;
  let fixture: ComponentFixture<GateOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
