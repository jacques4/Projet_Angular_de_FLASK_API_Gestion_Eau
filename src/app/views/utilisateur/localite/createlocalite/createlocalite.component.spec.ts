import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelocaliteComponent } from './createlocalite.component';

describe('CreatelocaliteComponent', () => {
  let component: CreatelocaliteComponent;
  let fixture: ComponentFixture<CreatelocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatelocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatelocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
