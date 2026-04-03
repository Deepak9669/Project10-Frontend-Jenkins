import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-decorationlist',
  templateUrl: './decorationlist.component.html'
})
export class DecorationlistComponent extends BaseListCtl {

  constructor(private locator : ServiceLocatorService , route  : ActivatedRoute) {
    super(locator.endpoints.DECORATION , locator , route);
  }

}
