import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpersonneComponent } from './detailpersonne.component';

describe('DetailpersonneComponent', () => {
  let component: DetailpersonneComponent;
  let fixture: ComponentFixture<DetailpersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
