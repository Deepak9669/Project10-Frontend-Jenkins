import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent extends BaseCtl {

  override   form: any;

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute){
    super(locator.endpoints.USAGE , locator , route);
  }

}
