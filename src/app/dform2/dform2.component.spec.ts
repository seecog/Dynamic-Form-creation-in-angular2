import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dform2Component } from './dform2.component';

describe('Dform2Component', () => {
  let component: Dform2Component;
  let fixture: ComponentFixture<Dform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
