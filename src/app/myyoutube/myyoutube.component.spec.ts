import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyyoutubeComponent } from './myyoutube.component';

describe('MyyoutubeComponent', () => {
  let component: MyyoutubeComponent;
  let fixture: ComponentFixture<MyyoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyyoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyyoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
