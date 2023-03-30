import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtypeclientComponent } from './listtypeclient.component';

describe('ListtypeclientComponent', () => {
  let component: ListtypeclientComponent;
  let fixture: ComponentFixture<ListtypeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtypeclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtypeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
