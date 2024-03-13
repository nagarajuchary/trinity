import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria7Component } from './dcriteria7.component';

describe('Dcriteria7Component', () => {
  let component: Dcriteria7Component;
  let fixture: ComponentFixture<Dcriteria7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
