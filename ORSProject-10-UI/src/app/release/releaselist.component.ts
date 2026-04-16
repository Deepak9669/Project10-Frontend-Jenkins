import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-releaselist',
  templateUrl: './releaselist.component.html'
})
export class ReleaselistComponent extends BaseListCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.RELEASE , locator , route);
    }

}
