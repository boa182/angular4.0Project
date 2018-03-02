import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootnavComponent } from './footnav.component';

describe('FootnavComponent', () => {
  let component: FootnavComponent;
  let fixture: ComponentFixture<FootnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
