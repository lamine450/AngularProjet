import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilDeSortieComponent } from './edit-profil-de-sortie.component';

describe('EditProfilDeSortieComponent', () => {
  let component: EditProfilDeSortieComponent;
  let fixture: ComponentFixture<EditProfilDeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilDeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
