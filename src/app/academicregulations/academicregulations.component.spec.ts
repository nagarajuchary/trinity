import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicregulationsComponent } from './academicregulations.component';

describe('AcademicregulationsComponent', () => {
  let component: AcademicregulationsComponent;
  let fixture: ComponentFixture<AcademicregulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicregulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicregulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
