import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodadminComponent } from './foodadmin.component';

describe('FoodadminComponent', () => {
  let component: FoodadminComponent;
  let fixture: ComponentFixture<FoodadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
