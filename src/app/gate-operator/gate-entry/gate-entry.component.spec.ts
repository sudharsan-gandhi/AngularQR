import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateEntryComponent } from './gate-entry.component';

describe('GateEntryComponent', () => {
  let component: GateEntryComponent;
  let fixture: ComponentFixture<GateEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
