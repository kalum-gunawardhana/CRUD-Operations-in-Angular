import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCusComponent } from './update-cus.component';

describe('UpdateCusComponent', () => {
  let component: UpdateCusComponent;
  let fixture: ComponentFixture<UpdateCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
