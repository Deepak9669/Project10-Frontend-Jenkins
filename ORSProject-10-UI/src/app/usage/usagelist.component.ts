import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usagelist',
  templateUrl: './usagelist.component.html'
})
export class UsagelistComponent extends BaseListCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute){
      super(locator.endpoints.USAGE , locator , route);
    }

}
