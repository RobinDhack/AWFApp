import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionMobilePage } from './inscription-mobile.page';

describe('InscriptionMobilePage', () => {
  let component: InscriptionMobilePage;
  let fixture: ComponentFixture<InscriptionMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionMobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
