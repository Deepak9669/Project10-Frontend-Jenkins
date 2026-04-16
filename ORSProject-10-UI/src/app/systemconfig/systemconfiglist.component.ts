import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-systemconfiglist',
  templateUrl: './systemconfiglist.component.html'
})
export class SystemconfiglistComponent extends BaseListCtl{

   constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.SYSTEM_CONFIG , locator , route);
    }

}
