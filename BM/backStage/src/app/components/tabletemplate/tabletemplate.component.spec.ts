import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletemplateComponent } from './tabletemplate.component';

describe('TabletemplateComponent', () => {
  let component: TabletemplateComponent;
  let fixture: ComponentFixture<TabletemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
