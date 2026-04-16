import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html'
})
export class SupplierComponent extends BaseCtl{



   constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.SUPPLIER , locator , route);
    }

}
