import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateutilisateurComponent } from './createutilisateur.component';

describe('CreateutilisateurComponent', () => {
  let component: CreateutilisateurComponent;
  let fixture: ComponentFixture<CreateutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
