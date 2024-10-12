import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHomeComponent } from './auth-home.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('AuthHomeComponent', () => {
  let fixture: ComponentFixture<AuthHomeComponent>;
  let mockRoute = {
    url: of([])
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthHomeComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute }
      ]
    })
    
    fixture = TestBed.createComponent(AuthHomeComponent);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

});
