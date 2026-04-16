import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html'
})
export class SupplierListComponent extends BaseListCtl {

  override form: any;


  constructor(private locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SUPPLIER, locator, route);
  }

}
