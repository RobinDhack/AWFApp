import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCoursePage } from './web-course.page';

describe('WebCoursePage', () => {
  let component: WebCoursePage;
  let fixture: ComponentFixture<WebCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
