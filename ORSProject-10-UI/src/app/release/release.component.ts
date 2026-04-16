import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.RELEASE , locator , route);
  }

}
