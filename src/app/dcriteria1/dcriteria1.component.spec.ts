import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria1Component } from './dcriteria1.component';

describe('Dcriteria1Component', () => {
  let component: Dcriteria1Component;
  let fixture: ComponentFixture<Dcriteria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
