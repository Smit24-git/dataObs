import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../shared/services/Authentication/auth.service';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService, mockLocalStorageService;
  beforeEach(()=>{
    mockAuthService = jasmine.createSpyObj(['authenticate']);
    mockLocalStorageService = jasmine.createSpyObj(['saveToken']);

    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers:[
        { provide: AuthService, useValue: mockAuthService }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
  });

  it('should Initialize with Form Group', ()=>{
    fixture.detectChanges();

    expect(fixture.componentInstance.loginForm).toBeTruthy();
  });

  it('should have form with email and password fields',()=>{
    fixture.detectChanges();

    let component = fixture.componentInstance;

    expect(component.loginForm).toBeTruthy();
    expect(Object.keys(component.loginForm.controls)).toContain('email');
    expect(Object.keys(component.loginForm.controls)).toContain('password');
  });

  it(`should trigger 'authenticateUser' on submit `, fakeAsync(() => {
    let component = fixture.componentInstance;
    spyOn(component,'authenticateUser');
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('#submit'));
    const form = fixture.debugElement.query(By.css("form"));
    form.triggerEventHandler('submit');
    tick();

    expect(submitButton.attributes['type']).toEqual('submit');
    expect(component.authenticateUser).toHaveBeenCalledTimes(1);
  }));

  it(`should not authenticate user if form data is not valid`, () => {
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component.authenticateUser).toThrowError();
  });
});
