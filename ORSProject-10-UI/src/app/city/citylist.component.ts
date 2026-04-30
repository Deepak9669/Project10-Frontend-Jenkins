import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html'
})
export class CitylistComponent extends BaseListCtl{

   constructor(private locator: ServiceLocatorService , route :ActivatedRoute) {
      super(locator.endpoints.CITY , locator , route);

}
}