import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accountstatuslist',
  templateUrl: './accountstatuslist.component.html'
})
export class AccountstatuslistComponent extends BaseListCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.ACCOUNTSTATUS , locator , route);
    
    }

}
