import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gymtrainer',
  templateUrl: './gymtrainer.component.html'
})
export class GymtrainerComponent extends BaseCtl{

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute){
    super(locator.endpoints.GYM_TRAINER , locator , route);
  }

}
