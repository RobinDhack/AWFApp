import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMobilePage } from './formulaire-mobile.page';

describe('FormulaireMobilePage', () => {
  let component: FormulaireMobilePage;
  let fixture: ComponentFixture<FormulaireMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireMobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
