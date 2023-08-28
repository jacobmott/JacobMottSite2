import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbattleComponent } from './totalbattle.component';

describe('TotalbattleComponent', () => {
  let component: TotalbattleComponent;
  let fixture: ComponentFixture<TotalbattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalbattleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalbattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
