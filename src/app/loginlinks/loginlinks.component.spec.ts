import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlinksComponent } from './loginlinks.component';

describe('LoginlinksComponent', () => {
  let component: LoginlinksComponent;
  let fixture: ComponentFixture<LoginlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
