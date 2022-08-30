import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginListComponent } from './user-login-list.component';

describe('UserLoginListComponent', () => {
  let component: UserLoginListComponent;
  let fixture: ComponentFixture<UserLoginListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
