import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelocaliteComponent } from './updatelocalite.component';

describe('UpdatelocaliteComponent', () => {
  let component: UpdatelocaliteComponent;
  let fixture: ComponentFixture<UpdatelocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatelocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
