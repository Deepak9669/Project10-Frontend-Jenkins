import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { EndpointServiceService } from './endpoint-service.service';
import { HttpServiceService } from './http-service.service';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashbord/dashboard.component';
import { RouterModule } from '@angular/router';
import { ServiceLocatorService } from './service-locator.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FooterComponent } from './footer/footer.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { CourseListComponent } from './course/course-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './login/singup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { AuthService } from './auth.service';
import { DatePipe } from '@angular/common';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { DecorationComponent } from './decoration/decoration.component';
import { DecorationlistComponent } from './decoration/decorationlist.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentlistComponent } from './appointment/appointmentlist.component';
import { InternetpackageComponent } from './internetpackage/internetpackage.component';
import { InternetpacckagelistComponent } from './internetpackage/internetpacckagelist.component';
import { PatientComponent } from './patient/patient.component';
import { PatientlistComponent } from './patient/patientlist.component';
import { RefundComponent } from './refund/refund.component';
import { RefundListComponent } from './refund/refundlist.component';
import { ContractComponent } from './contract/contract.component';
import { ContractListComponent } from './contract/contract-list.component';
import { TaxComponent } from './tax/tax.component';
import { TaxListComponent } from './tax/tax-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionListComponent } from './subscription/subscription-list.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report/report-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier/supplier-list.component';
import { SystemconfigComponent } from './systemconfig/systemconfig.component';
import { SystemconfiglistComponent } from './systemconfig/systemconfiglist.component';
import { InvestorComponent } from './investor/investor.component';
import { InvestorlistComponent } from './investor/investorlist.component';
import { ReleaseComponent } from './release/release.component';
import { ReleaselistComponent } from './release/releaselist.component';
import { SecretComponent } from './secret/secret.component';
import { SecretlistComponent } from './secret/secretlist.component';
import { UsageComponent } from './usage/usage.component';
import { UsagelistComponent } from './usage/usagelist.component';
import { ApiComponent } from './api/api.component';
import { ApilistComponent } from './api/apilist.component';
import { GymtrainerComponent } from './gymtrainer/gymtrainer.component';
import { GymtrainerlistComponent } from './gymtrainer/gymtrainerlist.component';
import { JobComponent } from './job/job.component';
import { JoblistComponent } from './job/joblist.component';
import { CityComponent } from './city/city.component';
import { CitylistComponent } from './city/citylist.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent,
    CollegeComponent,
    StudentComponent,
    MarksheetComponent,
    CourseComponent,
    SubjectComponent,
    TimetableComponent,
    FooterComponent,
    RoleListComponent,
    UserListComponent,
    MarksheetListComponent,
    StudentListComponent,
    SubjectListComponent,
    CourseListComponent,
    TimetableListComponent,
    CollegeListComponent,
    FacultyComponent,
    FacultyListComponent,
    LoginComponent,
    SingupComponent,
    ForgotpasswordComponent,
    MyprofileComponent,
    ChangepasswordComponent,
    MarksheetmeritlistComponent,
    GetmarksheetComponent,
    DecorationComponent,
    DecorationlistComponent,
    AppointmentComponent,
    AppointmentlistComponent,
    InternetpackageComponent,
    InternetpacckagelistComponent,
    PatientComponent,
    PatientlistComponent,
    RefundComponent,
    RefundListComponent,
    ContractComponent,
    ContractListComponent,
    TaxComponent,
    TaxListComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
    ReportComponent,
    ReportListComponent,
    SupplierComponent,
    SupplierListComponent,
    SystemconfigComponent,
    SystemconfiglistComponent,
    InvestorComponent,
    InvestorlistComponent,
    ReleaseComponent,
    ReleaselistComponent,
    SecretComponent,
    SecretlistComponent,
    UsageComponent,
    UsagelistComponent,
    ApiComponent,
    ApilistComponent,
    GymtrainerComponent,
    GymtrainerlistComponent,
    JobComponent,
    JoblistComponent,
    CityComponent,
    CitylistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
      DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
