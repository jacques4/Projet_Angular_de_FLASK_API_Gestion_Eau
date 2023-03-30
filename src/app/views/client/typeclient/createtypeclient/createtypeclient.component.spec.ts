import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetypeclientComponent } from './createtypeclient.component';

describe('CreatetypeclientComponent', () => {
  let component: CreatetypeclientComponent;
  let fixture: ComponentFixture<CreatetypeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetypeclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatetypeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
