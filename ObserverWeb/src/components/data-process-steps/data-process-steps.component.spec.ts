import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessStepsComponent } from './data-process-steps.component';

describe('DataProcessStepsComponent', () => {
  let component: DataProcessStepsComponent;
  let fixture: ComponentFixture<DataProcessStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProcessStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProcessStepsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has at least 1 process step', () => {
    
    fixture.detectChanges();
    
    expect(component.steps).toBeTruthy();
    expect(component.steps.length).toBeGreaterThan(0);
  });

  it('should call setSteps on Load exactly once', ()=>{
    spyOn(component,'setSteps');
    
    fixture.detectChanges();

    expect(component.setSteps).toHaveBeenCalledTimes(1);
  });

});
