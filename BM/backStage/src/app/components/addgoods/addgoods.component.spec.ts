import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgoodsComponent } from './addgoods.component';

describe('AddgoodsComponent', () => {
  let component: AddgoodsComponent;
  let fixture: ComponentFixture<AddgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
