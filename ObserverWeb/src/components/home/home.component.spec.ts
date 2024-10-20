import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/LocalStorage/local-storage.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let mockRouter:any;
  let mockLocalStorage:any;
  let mockRoute:any;

  beforeEach(() => {
    mockLocalStorage = jasmine.createSpyObj(['getToken']);
    mockRouter = {
      navigate: (arr:string[]) => { },
      events: of([]),
      createUrlTree: (cmds:[], navE: {})=>{},
      serializeUrl: (url:string) => {}
    };

    mockRoute = { location: of([]), } 
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers:[
        { provide:Router, useValue: mockRouter },
        { provide:LocalStorageService, useValue: mockLocalStorage },
        { provide:ActivatedRoute, useValue: mockRoute },
      ]
    });
    
    fixture = TestBed.createComponent(HomeComponent);
  });

  it('should call redirectIfNotLoggedIn on component init', ()=>{
    spyOn(fixture.componentInstance, 'redirectIfNotLoggedIn');

    fixture.detectChanges();

    expect(fixture.componentInstance.redirectIfNotLoggedIn).toHaveBeenCalledTimes(1);
  });

  it('should redirect when user is not logged in',()=>{
    const falsyValues = [null, undefined, '']
    spyOn(mockRouter, 'navigate');

    falsyValues.forEach((returnVal)=>{
      mockLocalStorage.getToken.and.returnValue(null);
      
      fixture.detectChanges();
      
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['auth']);
    });
    
  });
  
  it('should not redirect when user is logged in',()=>{
    mockLocalStorage.getToken.and.returnValue('token asds');
    spyOn(mockRouter, 'navigate');

    fixture.detectChanges();
    
    expect(mockRouter.navigate).toHaveBeenCalledTimes(0);
  });


});
