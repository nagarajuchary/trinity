import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsectionComponent } from './placementsection.component';

describe('PlacementsectionComponent', () => {
  let component: PlacementsectionComponent;
  let fixture: ComponentFixture<PlacementsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
