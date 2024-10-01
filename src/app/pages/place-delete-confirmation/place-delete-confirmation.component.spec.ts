import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDeleteConfirmationComponent } from './place-delete-confirmation.component';

describe('PlaceDeleteConfirmationComponent', () => {
  let component: PlaceDeleteConfirmationComponent;
  let fixture: ComponentFixture<PlaceDeleteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceDeleteConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
