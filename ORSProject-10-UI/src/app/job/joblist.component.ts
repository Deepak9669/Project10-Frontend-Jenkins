import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html'
})
export class JoblistComponent extends BaseListCtl{

   constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.JOB , locator , route);
     
    }

}
