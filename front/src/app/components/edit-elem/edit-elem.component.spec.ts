/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditElemComponent } from './edit-elem.component';

describe('EditElemComponent', () => {
  let component: EditElemComponent;
  let fixture: ComponentFixture<EditElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
