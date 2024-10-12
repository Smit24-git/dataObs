import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOptionsComponent } from './auth-options.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('AuthOptionsComponent', () => {
  let fixture: ComponentFixture<AuthOptionsComponent>;

  let mockRouter = {
    url: of({})
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthOptionsComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(AuthOptionsComponent);
  });

  it('should have at least one auth option', ()=>{
    fixture.detectChanges();

    expect(fixture.componentInstance.options.length).toBeGreaterThan(0);
  });

});
