import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let fixture: ComponentFixture<TopBarComponent>
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [],
    });
    fixture = TestBed.createComponent(TopBarComponent)
  });

  it("should have title Data Observer",()=>{
    expect(fixture.componentInstance.title).toBe("Data Observer");
  });
});
