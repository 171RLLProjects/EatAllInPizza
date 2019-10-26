import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMenuFoodComponent } from './customer-menu-food.component';

describe('CustomerMenuFoodComponent', () => {
  let component: CustomerMenuFoodComponent;
  let fixture: ComponentFixture<CustomerMenuFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMenuFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMenuFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
