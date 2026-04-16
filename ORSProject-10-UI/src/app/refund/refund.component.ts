import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html'
})
export class RefundComponent extends BaseCtl {

  constructor(private locator: ServiceLocatorService  , route: ActivatedRoute) {
    super(locator.endpoints.REFUND , locator , route);
  }

}
