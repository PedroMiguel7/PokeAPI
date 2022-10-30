import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebollComponent } from './pokeboll.component';

describe('PokebollComponent', () => {
  let component: PokebollComponent;
  let fixture: ComponentFixture<PokebollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokebollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokebollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
