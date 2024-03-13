import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoracademicsComponent } from './directoracademics.component';

describe('DirectoracademicsComponent', () => {
  let component: DirectoracademicsComponent;
  let fixture: ComponentFixture<DirectoracademicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoracademicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectoracademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
