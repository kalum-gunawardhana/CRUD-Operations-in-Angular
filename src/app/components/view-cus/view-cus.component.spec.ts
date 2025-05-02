import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCusComponent } from './view-cus.component';

describe('ViewCusComponent', () => {
  let component: ViewCusComponent;
  let fixture: ComponentFixture<ViewCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
