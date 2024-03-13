import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criteria6Component } from './criteria6.component';

describe('Criteria6Component', () => {
  let component: Criteria6Component;
  let fixture: ComponentFixture<Criteria6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criteria6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Criteria6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
