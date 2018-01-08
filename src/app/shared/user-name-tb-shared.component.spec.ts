import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameTbSharedComponent } from './user-name-tb-shared.component';

describe('UserNameTbSharedComponent', () => {
  let component: UserNameTbSharedComponent;
  let fixture: ComponentFixture<UserNameTbSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameTbSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameTbSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
