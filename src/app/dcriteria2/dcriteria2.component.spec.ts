import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria2Component } from './dcriteria2.component';

describe('Dcriteria2Component', () => {
  let component: Dcriteria2Component;
  let fixture: ComponentFixture<Dcriteria2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
