import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOperatorComponent } from './quality-operator.component';

describe('QualityOperatorComponent', () => {
  let component: QualityOperatorComponent;
  let fixture: ComponentFixture<QualityOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
