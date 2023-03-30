import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmarqueComponent } from './listmarque.component';

describe('ListmarqueComponent', () => {
  let component: ListmarqueComponent;
  let fixture: ComponentFixture<ListmarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmarqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
