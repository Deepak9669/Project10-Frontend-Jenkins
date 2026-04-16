import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-refundlist',
  templateUrl: './refundlist.component.html'
})
export class RefundListComponent extends BaseListCtl {

  constructor(private locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.REFUND, locator, route);
  }

}
