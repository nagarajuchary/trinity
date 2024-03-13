import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria4Component } from './dcriteria4.component';

describe('Dcriteria4Component', () => {
  let component: Dcriteria4Component;
  let fixture: ComponentFixture<Dcriteria4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
