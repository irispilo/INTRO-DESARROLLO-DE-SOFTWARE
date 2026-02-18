import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablas } from './tablas';

describe('Tablas', () => {
  let component: Tablas;
  let fixture: ComponentFixture<Tablas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
