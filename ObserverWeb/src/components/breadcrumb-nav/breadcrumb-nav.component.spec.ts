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

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should initiate Home route', ()=>{
    fixture.detectChanges();

    expect(fixture.componentInstance.home).toBeTruthy();
  });

  it(`should initialize home route with default route '/home' `,()=>{
    fixture.detectChanges();

    expect(fixture.componentInstance.home.routerLink).toEqual('/home');
  });
});
