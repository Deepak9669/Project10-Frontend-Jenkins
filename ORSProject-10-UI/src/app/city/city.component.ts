import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent extends BaseCtl{

  constructor(private locator: ServiceLocatorService , route :ActivatedRoute) {
    super(locator.endpoints.CITY , locator , route);

} 
}