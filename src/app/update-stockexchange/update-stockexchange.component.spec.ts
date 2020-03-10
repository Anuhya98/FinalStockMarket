import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockexchangeComponent } from './update-stockexchange.component';

describe('UpdateStockexchangeComponent', () => {
  let component: UpdateStockexchangeComponent;
  let fixture: ComponentFixture<UpdateStockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
