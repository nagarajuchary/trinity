import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeofficerComponent } from './administrativeofficer.component';

describe('AdministrativeofficerComponent', () => {
  let component: AdministrativeofficerComponent;
  let fixture: ComponentFixture<AdministrativeofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeofficerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
