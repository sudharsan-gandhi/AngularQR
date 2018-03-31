import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillerRequestsComponent } from './miller-requests.component';

describe('MillerRequestsComponent', () => {
  let component: MillerRequestsComponent;
  let fixture: ComponentFixture<MillerRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillerRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
