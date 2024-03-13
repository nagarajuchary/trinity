import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IiqaComponent } from './iiqa.component';

describe('IiqaComponent', () => {
  let component: IiqaComponent;
  let fixture: ComponentFixture<IiqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IiqaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IiqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
