import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighbridgeDetailsComponent } from './weighbridge-details.component';

describe('WeighbridgeDetailsComponent', () => {
  let component: WeighbridgeDetailsComponent;
  let fixture: ComponentFixture<WeighbridgeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighbridgeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighbridgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
