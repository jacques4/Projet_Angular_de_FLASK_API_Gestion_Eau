import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetypeclientComponent } from './deletetypeclient.component';

describe('DeletetypeclientComponent', () => {
  let component: DeletetypeclientComponent;
  let fixture: ComponentFixture<DeletetypeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetypeclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletetypeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
