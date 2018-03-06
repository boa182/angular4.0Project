import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinpaiComponent } from './pinpai.component';

describe('PinpaiComponent', () => {
  let component: PinpaiComponent;
  let fixture: ComponentFixture<PinpaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinpaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinpaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
