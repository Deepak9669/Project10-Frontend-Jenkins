import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent extends BaseCtl {

 override form: any; 

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.SUBSCRIPTION , locator , route);
  }

}
