import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerRequestsComponent } from './consumer-requests.component';

describe('ConsumerRequestsComponent', () => {
  let component: ConsumerRequestsComponent;
  let fixture: ComponentFixture<ConsumerRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
