import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseofferedComponent } from './courseoffered.component';

describe('CourseofferedComponent', () => {
  let component: CourseofferedComponent;
  let fixture: ComponentFixture<CourseofferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseofferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseofferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
