import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent  extends BaseCtl{

  constructor( private locator :ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.APPOINTMENT, locator, route);
  }

}
