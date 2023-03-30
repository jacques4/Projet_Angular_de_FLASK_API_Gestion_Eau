import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlocaliteComponent } from './listlocalite.component';

describe('ListlocaliteComponent', () => {
  let component: ListlocaliteComponent;
  let fixture: ComponentFixture<ListlocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
