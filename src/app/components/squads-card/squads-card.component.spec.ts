import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadsCardComponent } from './squads-card.component';

describe('SquadsCardComponent', () => {
  let component: SquadsCardComponent;
  let fixture: ComponentFixture<SquadsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquadsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
