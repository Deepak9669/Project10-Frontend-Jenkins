import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-systemconfig',
  templateUrl: './systemconfig.component.html'
})
export class SystemconfigComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService ,  route : ActivatedRoute) {
    super(locator.endpoints.SYSTEM_CONFIG , locator , route);
  }

}
