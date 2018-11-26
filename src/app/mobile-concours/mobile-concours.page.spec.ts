import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileConcoursPage } from './mobile-concours.page';

describe('MobileConcoursPage', () => {
  let component: MobileConcoursPage;
  let fixture: ComponentFixture<MobileConcoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileConcoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileConcoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
