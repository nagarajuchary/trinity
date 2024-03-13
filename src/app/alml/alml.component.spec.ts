import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALMLComponent } from './alml.component';

describe('ALMLComponent', () => {
  let component: ALMLComponent;
  let fixture: ComponentFixture<ALMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALMLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ALMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
