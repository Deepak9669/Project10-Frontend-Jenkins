import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax-list',
  templateUrl: './tax-list.component.html'
})
export class TaxListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService,  route: ActivatedRoute) {
    super(locator.endpoints.TAX, locator, route);
  }

}
