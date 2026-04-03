import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-internetpacckagelist',
  templateUrl: './internetpacckagelist.component.html'
})
export class InternetpacckagelistComponent extends BaseListCtl {

  constructor(private locator : ServiceLocatorService ,  route : ActivatedRoute) {
      super(locator.endpoints.INTERNET_PACKAGE , locator , route);
    }

}
