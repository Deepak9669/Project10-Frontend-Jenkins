import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investorlist',
  templateUrl: './investorlist.component.html'
})
export class InvestorlistComponent extends BaseListCtl{

   constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
      super(locator.endpoints.INVESTOR , locator , route);
    }

}
