import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualItemPageComponent } from './individual-item-page.component';

describe('IndividualItemPageComponent', () => {
  let component: IndividualItemPageComponent;
  let fixture: ComponentFixture<IndividualItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
