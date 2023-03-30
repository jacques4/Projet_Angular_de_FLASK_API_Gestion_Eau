import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonneComponent } from './listpersonne.component';

describe('ListpersonneComponent', () => {
  let component: ListpersonneComponent;
  let fixture: ComponentFixture<ListpersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
