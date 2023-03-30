import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemarqueComponent } from './createmarque.component';

describe('CreatemarqueComponent', () => {
  let component: CreatemarqueComponent;
  let fixture: ComponentFixture<CreatemarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemarqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
