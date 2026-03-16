import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contribuition } from './contribuition';

describe('Contribuition', () => {
  let component: Contribuition;
  let fixture: ComponentFixture<Contribuition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contribuition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contribuition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
