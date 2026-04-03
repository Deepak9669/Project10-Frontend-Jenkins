import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html'
})
export class AppointmentlistComponent extends BaseListCtl{

   constructor( private locator :ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.APPOINTMENT, locator, route);
    }

}
