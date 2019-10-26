import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaddonComponent } from './listaddon.component';

describe('ListaddonComponent', () => {
  let component: ListaddonComponent;
  let fixture: ComponentFixture<ListaddonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaddonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
