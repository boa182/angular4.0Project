import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegisterComponent } from './log-register.component';

describe('LogRegisterComponent', () => {
  let component: LogRegisterComponent;
  let fixture: ComponentFixture<LogRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
