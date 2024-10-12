import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbNavComponent } from './breadcrumb-nav.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('BreadcrumbNavComponent', () => {
  let fixture: ComponentFixture<BreadcrumbNavComponent>;
  let mockRoute:any;

  mockRoute = {
    url: of({}),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide:ActivatedRoute, useValue: mockRoute },
      ]
    });

    fixture = TestBed.createComponent(BreadcrumbNavComponent);
  });

  it('should configure routing with single value currentLocation', () => {
    fixture.componentInstance.currentLocation = ['auth'];

    fixture.detectChanges();

    fixture.componentInstance.setItemsByCurrentLocation();

    expect(fixture.componentInstance.items).toEqual([{
      label: 'auth',
      routerLink: 'auth'
    }]);
  });

  
  it('should configure routing with multiple value currentLocation', () => {
    fixture.componentInstance.currentLocation = ['auth', 'login'];

    fixture.detectChanges();

    fixture.componentInstance.setItemsByCurrentLocation();

    expect(fixture.componentInstance.items).toEqual([{
      label: 'auth',
      routerLink: 'auth'
    }, {
      label: 'login',
      routerLink: 'auth/login'
    }]);
  });
});
