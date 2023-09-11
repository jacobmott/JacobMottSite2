import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionComponent } from './potion.component';

describe('PotionComponent', () => {
  let component: PotionComponent;
  let fixture: ComponentFixture<PotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
