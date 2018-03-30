import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotOperatorComponent } from './depot-operator.component';

describe('DepotOperatorComponent', () => {
  let component: DepotOperatorComponent;
  let fixture: ComponentFixture<DepotOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
