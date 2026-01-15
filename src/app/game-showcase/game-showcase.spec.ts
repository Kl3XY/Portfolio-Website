import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameShowcase } from './game-showcase';

describe('GameShowcase', () => {
  let component: GameShowcase;
  let fixture: ComponentFixture<GameShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
