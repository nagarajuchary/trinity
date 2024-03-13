import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria6Component } from './dcriteria6.component';

describe('Dcriteria6Component', () => {
  let component: Dcriteria6Component;
  let fixture: ComponentFixture<Dcriteria6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
