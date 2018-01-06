import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserEventsComponent } from './add-user-events.component';

describe('AddUserEventsComponent', () => {
  let component: AddUserEventsComponent;
  let fixture: ComponentFixture<AddUserEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
