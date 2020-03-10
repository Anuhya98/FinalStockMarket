import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangeslistComponent } from './stockexchangeslist.component';

describe('StockexchangeslistComponent', () => {
  let component: StockexchangeslistComponent;
  let fixture: ComponentFixture<StockexchangeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockexchangeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
