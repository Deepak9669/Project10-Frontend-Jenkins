import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html'
})
export class PatientlistComponent extends BaseListCtl{


    constructor(private loader : ServiceLocatorService , route : ActivatedRoute) {
      super(loader.endpoints.PATIENT , loader , route);
    }

}
