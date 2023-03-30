import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetypeclientComponent } from './updatetypeclient.component';

describe('UpdatetypeclientComponent', () => {
  let component: UpdatetypeclientComponent;
  let fixture: ComponentFixture<UpdatetypeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetypeclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetypeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
