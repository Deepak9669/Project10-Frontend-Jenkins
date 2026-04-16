import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html'
})
export class TaxComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService,  route: ActivatedRoute) {
    super(locator.endpoints.TAX, locator, route);
  }

}
