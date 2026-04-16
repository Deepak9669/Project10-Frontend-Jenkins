import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html'
})
export class InvestorComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.INVESTOR , locator , route);
  }

}
