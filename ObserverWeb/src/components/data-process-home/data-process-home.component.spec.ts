import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessHomeComponent } from './data-process-home.component';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthHomeComponent } from '../auth-home/auth-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationStrategy } from '@angular/common';

describe('DataProcessHomeComponent', () => {
  let fixture: ComponentFixture<DataProcessHomeComponent>;
  let mockRoute:any;


  beforeEach( () => {

    mockRoute = {
      url: of({}),
      location: of({}),
      locationStrategy: of({}),
    }

    TestBed.configureTestingModule({
      imports: [
        DataProcessHomeComponent,
      ],
      providers: [
        provideRouter([{path: 'auth', component: AuthHomeComponent }]),
        { provide:ActivatedRoute, useValue: mockRoute },
      ]
    })
    
    fixture = TestBed.createComponent(DataProcessHomeComponent);
    
  });

  it('should initialize login to false', () =>{
    expect(fixture.componentInstance.login).toBe(false);
  });

  it(`should call 'checkLoginAndNavigate' on load`, ()=>{
    let component = fixture.componentInstance;
    spyOn(component, 'checkLoginAndNavigate');

    fixture.detectChanges();

    expect(component.checkLoginAndNavigate).toHaveBeenCalledTimes(1);
  });

  it(`should have the first current location 'data-process'`,  () => {
    expect(fixture.componentInstance.currentLocation[0]).toBe('data-process');
  });


});
