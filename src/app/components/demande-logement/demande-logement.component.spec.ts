import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeLogementComponent } from './demande-logement.component';

describe('DemandeLogementComponent', () => {
  let component: DemandeLogementComponent;
  let fixture: ComponentFixture<DemandeLogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeLogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
