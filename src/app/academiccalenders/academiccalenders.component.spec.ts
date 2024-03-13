import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiccalendersComponent } from './academiccalenders.component';

describe('AcademiccalendersComponent', () => {
  let component: AcademiccalendersComponent;
  let fixture: ComponentFixture<AcademiccalendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiccalendersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademiccalendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
