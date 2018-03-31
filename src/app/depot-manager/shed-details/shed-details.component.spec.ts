import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedDetailsComponent } from './shed-details.component';

describe('ShedDetailsComponent', () => {
  let component: ShedDetailsComponent;
  let fixture: ComponentFixture<ShedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
