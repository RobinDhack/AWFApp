import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPage } from './festival.page';

describe('FestivalPage', () => {
  let component: FestivalPage;
  let fixture: ComponentFixture<FestivalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
