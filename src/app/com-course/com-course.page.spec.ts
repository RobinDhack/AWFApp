import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCoursePage } from './com-course.page';

describe('ComCoursePage', () => {
  let component: ComCoursePage;
  let fixture: ComponentFixture<ComCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComCoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
