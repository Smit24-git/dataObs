import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessHomeComponent } from './data-process-home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('DataProcessHomeComponent', () => {
  let component: DataProcessHomeComponent;
  let fixture: ComponentFixture<DataProcessHomeComponent>;
  let mockRoute:any;

  mockRoute = {
    url: of({}),
  }

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [DataProcessHomeComponent],
      providers: [
        { provide:ActivatedRoute, useValue: mockRoute },
      ]
    })
    
    fixture = TestBed.createComponent(DataProcessHomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


});
