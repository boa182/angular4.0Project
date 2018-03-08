import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSellComponent } from './goods-sell.component';

describe('GoodsSellComponent', () => {
  let component: GoodsSellComponent;
  let fixture: ComponentFixture<GoodsSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
