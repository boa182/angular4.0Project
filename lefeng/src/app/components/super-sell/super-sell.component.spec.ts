import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSellComponent } from './super-sell.component';

describe('SuperSellComponent', () => {
  let component: SuperSellComponent;
  let fixture: ComponentFixture<SuperSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
