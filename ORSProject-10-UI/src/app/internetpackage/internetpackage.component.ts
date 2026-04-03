import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internetpackage',
  templateUrl: './internetpackage.component.html'
})
export class InternetpackageComponent extends BaseCtl {


  constructor(private locator : ServiceLocatorService ,  route : ActivatedRoute) {
    super(locator.endpoints.INTERNET_PACKAGE , locator , route);
  }

}
