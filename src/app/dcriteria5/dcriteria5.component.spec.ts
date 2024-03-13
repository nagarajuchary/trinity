import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dcriteria5Component } from './dcriteria5.component';

describe('Dcriteria5Component', () => {
  let component: Dcriteria5Component;
  let fixture: ComponentFixture<Dcriteria5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dcriteria5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dcriteria5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
