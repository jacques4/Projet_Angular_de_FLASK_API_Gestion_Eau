import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillocaliteComponent } from './detaillocalite.component';

describe('DetaillocaliteComponent', () => {
  let component: DetaillocaliteComponent;
  let fixture: ComponentFixture<DetaillocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
