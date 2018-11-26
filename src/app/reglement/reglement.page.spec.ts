import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementPage } from './reglement.page';

describe('ReglementPage', () => {
  let component: ReglementPage;
  let fixture: ComponentFixture<ReglementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
