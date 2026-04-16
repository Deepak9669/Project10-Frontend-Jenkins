import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html'
})
export class ReportListComponent extends BaseListCtl {

     override form: any;


  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.REPORT , locator , route);
  }

}
