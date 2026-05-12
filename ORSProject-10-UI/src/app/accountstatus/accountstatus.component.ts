import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accountstatus',
  templateUrl: './accountstatus.component.html'
})
export class AccountstatusComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
  super(locator.endpoints.ACCOUNTSTATUS , locator , route);
  }

}
