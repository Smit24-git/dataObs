import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessHomeComponent } from './data-process-home.component';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { LocalStorageService } from '../../shared/services/LocalStorage/local-storage.service';

describe('DataProcessHomeComponent', () => {
  let fixture: ComponentFixture<DataProcessHomeComponent>;
  let mockRoute:any;
  let mockLocalStorage:any;
  let mockRouter:any;

  beforeEach( () => {
    mockLocalStorage = jasmine.createSpyObj(['getToken']);
    mockRoute = {
      location: of({}),
    }
    mockRouter = {
      navigate: (arr:string[]) => { },
      events: of([]),
      createUrlTree: (cmds:[], navE: {})=>{},
      serializeUrl: (url:string) => {},
    }

    TestBed.configureTestingModule({
      imports: [
        DataProcessHomeComponent,
      ],
      providers: [
        { provide:Router, useValue: mockRouter },
        { provide:LocalStorageService, useValue: mockLocalStorage },
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

  it(`should redirect when user is not authenticated`, ()=>{
    spyOn(mockRouter, 'navigate');
    mockLocalStorage.getToken.and.returnValue('');

    fixture.detectChanges();    
    
    expect(fixture.componentInstance.login).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['auth'])
  });

  it(`should not redirect when user is authenticated`, ()=>{
    mockLocalStorage.getToken.and.returnValue('token asds');
    spyOn(mockRouter, 'navigate');

    fixture.detectChanges();

    expect(mockLocalStorage.getToken).toHaveBeenCalledTimes(1);

    expect(fixture.componentInstance.login).toBeTrue();
    expect(mockRouter.navigate).toHaveBeenCalledTimes(0);
  });

});
