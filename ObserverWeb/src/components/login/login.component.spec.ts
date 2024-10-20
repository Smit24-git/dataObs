import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../shared/services/Authentication/auth.service';
import { LocalStorageService } from '../../shared/services/LocalStorage/local-storage.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: any, mockLocalStorageService: any;
  let mockRouter: any;
  beforeEach(()=>{
    mockAuthService = jasmine.createSpyObj(['authenticate']);
    mockLocalStorageService = jasmine.createSpyObj(['saveToken']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers:[
        { provide: AuthService, useValue: mockAuthService },
        { provide: LocalStorageService, useValue: mockLocalStorageService },
        { provide: Router, useValue: mockRouter },
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
    expect(()=> { component.authenticateUser(); }).toThrowError();
    expect(component.loginForm.invalid).toBeTrue();
  });  
  
  it(`should not throw Error user if form data is valid`, () => {    
    mockAuthService.authenticate.and.returnValue(of({}));
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.loginForm.setValue({ email: 'test@gmal.com', password: 'random invalid password' });
    component.authenticateUser();

    expect(component.loginForm.invalid).toBeFalse();
  });

  describe("on authenticate", ()=>{
    const authResponse = { token: 'randomUserToken' };
    beforeEach(()=>{
      let component = fixture.componentInstance;
      mockAuthService.authenticate.and.returnValue(of(authResponse));
      mockRouter.navigate.and.returnValue(of([]));
      
      fixture.detectChanges();
      component.loginForm.setValue({ email: 'test@gmal.com', password: 'random invalid password' });
      
      const form = fixture.debugElement.query(By.css("form"));
      form.triggerEventHandler('submit');
    });

    it('should save token', fakeAsync(()=>{
      tick();

      expect(mockLocalStorageService.saveToken).toHaveBeenCalledOnceWith(authResponse.token);
    }));

    it('should navigate to home page', fakeAsync(()=>{
      tick();
      
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['home']);
    }));
  })
});
