import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demande-logement',
  templateUrl: './demande-logement.component.html',
  styleUrls: ['./demande-logement.component.scss']
})
export class DemandeLogementComponent implements OnInit {


  public formInvalid: boolean;
  private formSubmitAttempt: boolean;

  identityForm: FormGroup;
  parentsInformations: FormGroup;
  accomodationType: FormGroup;
  accident: FormGroup;
  vehicle: FormGroup;
  documents: FormGroup;

  civilities = ['Monsieur', 'Madame'];
  promotions = ['INFRES-11', 'CMC-11'];
  accomodationTypes = ['Studio', 'Simplex'];

  accordionStatus = {
    identityForm: true,
    parentsInformation: false,
    accomodationType: false,
    accident: false,
    vehicle: false,
    documents: false
  };

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.identityForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      civility: ['', Validators.required],
      promotion: ['', Validators.required],
      birthDate: ['', Validators.required],
      nationality: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    });

    this.parentsInformations = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      housePhone: ['', Validators.required],
      motherPhone: ['', Validators.required],
      patherPhone: ['', Validators.required],
      motherProfessionnalPhone: ['', Validators.required],
      patherProfessionnalPhone: ['', Validators.required],
      email: ['', Validators.email],
    });

    this.accident = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.accomodationType = this.fb.group({
      accomodationType: ['', Validators.required]
    });

    this.vehicle = this.fb.group({
      type: ['', Validators.required],
      brand: ['', Validators.required],
      immatriculation: ['', Validators.required],
      color: ['', Validators.required],
      insuranceCompany: ['', Validators.required],
      policeNumber: ['', Validators.required]
    });

  }

  onIdentityFormSubmit() {
    console.log(this.accordionStatus);
    this.accordionStatus.identityForm = false;
    this.accordionStatus.parentsInformation = true;
  }


}
