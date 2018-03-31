import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMillerRequestComponent } from './view-miller-request.component';

describe('ViewMillerRequestComponent', () => {
  let component: ViewMillerRequestComponent;
  let fixture: ComponentFixture<ViewMillerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMillerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMillerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
