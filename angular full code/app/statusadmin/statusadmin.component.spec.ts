import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusadminComponent } from './statusadmin.component';

describe('StatusadminComponent', () => {
  let component: StatusadminComponent;
  let fixture: ComponentFixture<StatusadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
