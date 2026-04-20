import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.API , locator , route);
  }

}
