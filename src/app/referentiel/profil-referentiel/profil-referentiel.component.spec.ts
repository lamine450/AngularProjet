import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilReferentielComponent } from './profil-referentiel.component';

describe('ProfilReferentielComponent', () => {
  let component: ProfilReferentielComponent;
  let fixture: ComponentFixture<ProfilReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilReferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
