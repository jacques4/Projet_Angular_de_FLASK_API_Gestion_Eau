import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelivrerComponent } from './createlivrer.component';

describe('CreatelivrerComponent', () => {
  let component: CreatelivrerComponent;
  let fixture: ComponentFixture<CreatelivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatelivrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatelivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
