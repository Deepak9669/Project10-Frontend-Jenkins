import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html'
})
export class SubscriptionListComponent extends BaseListCtl {

  constructor(private locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SUBSCRIPTION, locator, route);
  }

}
