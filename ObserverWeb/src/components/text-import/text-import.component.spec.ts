import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImportComponent } from './text-import.component';

describe('TextImportComponent', () => {
  let component: TextImportComponent;
  let fixture: ComponentFixture<TextImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
