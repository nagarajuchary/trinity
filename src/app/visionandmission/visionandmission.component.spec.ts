import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionandmissionComponent } from './visionandmission.component';

describe('VisionandmissionComponent', () => {
  let component: VisionandmissionComponent;
  let fixture: ComponentFixture<VisionandmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionandmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisionandmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
