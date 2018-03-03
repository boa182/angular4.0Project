import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipComponent } from './vip.component';

describe('VipComponent', () => {
  let component: VipComponent;
  let fixture: ComponentFixture<VipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
