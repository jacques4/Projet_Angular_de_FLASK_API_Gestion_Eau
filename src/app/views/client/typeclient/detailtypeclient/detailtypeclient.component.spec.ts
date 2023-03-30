import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtypeclientComponent } from './detailtypeclient.component';

describe('DetailtypeclientComponent', () => {
  let component: DetailtypeclientComponent;
  let fixture: ComponentFixture<DetailtypeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtypeclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtypeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
