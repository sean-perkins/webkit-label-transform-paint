import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cityLabel = 'City';
  postalCodeLabel = 'ZIP';
  stateVisible = true;
  addressForm = this.fb.group({
    city: '',
    country: 'US',
    state: '',
    postalCode: '',
    cityFixed: '',
    stateFixed: '',
    postalCodeFixed: ''
  });


  constructor(private fb: FormBuilder) { }

  changeLabels(value: string) {
    switch (value) {
      case 'US':
        this.stateVisible = true;
        this.postalCodeLabel = 'ZIP';
        this.cityLabel = 'City';
        break;
      case 'IE':
        this.stateVisible = false;
        this.postalCodeLabel = 'Post Code';
        this.cityLabel = 'City / Town';
        break;
      case 'CA':
        this.stateVisible = false;
        this.postalCodeLabel = 'Province / Territory';
        this.cityLabel = 'Town / City';
        break;
    }

    // tried push change detection without any luck
    // this.cdr.detectChanges();
  }


}
