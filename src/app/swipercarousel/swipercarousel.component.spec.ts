import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipercarouselComponent } from './swipercarousel.component';

describe('SwipercarouselComponent', () => {
  let component: SwipercarouselComponent;
  let fixture: ComponentFixture<SwipercarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipercarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipercarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
