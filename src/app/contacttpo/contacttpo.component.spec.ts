import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttpoComponent } from './contacttpo.component';

describe('ContacttpoComponent', () => {
  let component: ContacttpoComponent;
  let fixture: ComponentFixture<ContacttpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacttpoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacttpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
