import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apilist',
  templateUrl: './apilist.component.html'
})
export class ApilistComponent extends BaseListCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.API , locator , route);
    }

}
