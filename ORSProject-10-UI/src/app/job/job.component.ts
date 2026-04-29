import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html'
})
export class JobComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.JOB , locator , route);
  }

}
