import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepersonneComponent } from './updatepersonne.component';

describe('UpdatepersonneComponent', () => {
  let component: UpdatepersonneComponent;
  let fixture: ComponentFixture<UpdatepersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
