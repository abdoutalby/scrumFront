import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamebordComponent } from './gamebord.component';

describe('GamebordComponent', () => {
  let component: GamebordComponent;
  let fixture: ComponentFixture<GamebordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamebordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamebordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
