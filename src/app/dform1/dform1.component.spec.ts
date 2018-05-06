import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dform1Component } from './dform1.component';

describe('Dform1Component', () => {
  let component: Dform1Component;
  let fixture: ComponentFixture<Dform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
