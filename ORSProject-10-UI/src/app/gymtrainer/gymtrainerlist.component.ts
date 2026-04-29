import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gymtrainerlist',
  templateUrl: './gymtrainerlist.component.html'
})
export class GymtrainerlistComponent extends BaseListCtl{

   constructor(private locator : ServiceLocatorService , route : ActivatedRoute){
      super(locator.endpoints.GYM_TRAINER , locator , route);
    }

}
