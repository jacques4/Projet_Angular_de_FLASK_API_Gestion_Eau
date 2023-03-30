import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillivrerComponent } from './detaillivrer.component';

describe('DetaillivrerComponent', () => {
  let component: DetaillivrerComponent;
  let fixture: ComponentFixture<DetaillivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillivrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
