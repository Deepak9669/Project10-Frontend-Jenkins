import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html'
})
export class DecorationComponent extends BaseCtl{

   constructor(private locator : ServiceLocatorService , route  : ActivatedRoute) {
      super(locator.endpoints.DECORATION , locator , route);
    }

}
