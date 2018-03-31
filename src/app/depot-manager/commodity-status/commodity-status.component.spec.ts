import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityStatusComponent } from './commodity-status.component';

describe('CommodityStatusComponent', () => {
  let component: CommodityStatusComponent;
  let fixture: ComponentFixture<CommodityStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
