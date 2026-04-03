import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})
export class PatientComponent extends BaseCtl{

  constructor(private loader : ServiceLocatorService , route : ActivatedRoute) {
    super(loader.endpoints.PATIENT , loader , route);
  }

}
