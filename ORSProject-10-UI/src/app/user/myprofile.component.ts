import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html'
})
export class MyprofileComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute, private datePipe: DatePipe) {
    super(locator.endpoints.USER, locator, route);
  }

  myProfile() {

    var _self = this;

    // ✅ STEP 1: loginId add karo
    this.form.data.loginId = localStorage.getItem("loginId");

    // ✅ STEP 2: DOB format fix karo
    if (this.form.data.dob) {
      this.form.data.dob = this.datePipe.transform(this.form.data.dob, 'yyyy-MM-dd');
    }

    // ✅ STEP 3: Debug (optional but useful)
    console.log(this.form.data);

    // ✅ STEP 4: API call
    this.serviceLocator.httpService.post(
      'http://localhost:8081/User/myProfile',
      this.form.data,
      function (res: any) {

        _self.form.message = '';
        _self.form.inputerror = {};

        if (res.success) {
          _self.form.message = res.result.message;

          // ❗ id set karna zaroori nahi hai (optional)
          // _self.form.data.id = res.result.data;

        } else {
          _self.form.error = true;

          if (res.result.inputerror) {
            _self.form.inputerror = res.result.inputerror;
          }

          _self.form.message = res.result.message;
        }
      }
    );
  }

}