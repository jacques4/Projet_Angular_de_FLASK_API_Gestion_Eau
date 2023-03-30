import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelivrerComponent } from './updatelivrer.component';

describe('UpdatelivrerComponent', () => {
  let component: UpdatelivrerComponent;
  let fixture: ComponentFixture<UpdatelivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelivrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatelivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
