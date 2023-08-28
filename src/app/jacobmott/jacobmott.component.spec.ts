import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacobmottComponent } from './jacobmott.component';

describe('JacobmottComponent', () => {
  let component: JacobmottComponent;
  let fixture: ComponentFixture<JacobmottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacobmottComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacobmottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
