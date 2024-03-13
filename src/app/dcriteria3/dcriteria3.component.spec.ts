import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria3Component } from './dcriteria3.component';

describe('Dcriteria3Component', () => {
  let component: Dcriteria3Component;
  let fixture: ComponentFixture<Dcriteria3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
