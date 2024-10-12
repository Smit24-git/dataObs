import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);
  });

  it('should Initialize with Form Group', ()=>{
    fixture.detectChanges();

    expect(fixture.componentInstance.loginForm).toBeTruthy();
  });
});
