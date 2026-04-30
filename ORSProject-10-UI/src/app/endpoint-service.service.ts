import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() {
    console.log('in EndpointServiceService ts')
   }

  public SERVER_URL = "http://localhost:8081";
  public MESSAGE = this.SERVER_URL + "/Message";

  
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL+ "/Subject";
  public FACULTY = this.SERVER_URL+ "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL+ "/TimeTable";
  public DECORATION = this.SERVER_URL+ "/Decoration";
  public APPOINTMENT = this.SERVER_URL+ "/Appointment";
  public INTERNET_PACKAGE = this.SERVER_URL+ "/InternetPackage";
  public PATIENT = this.SERVER_URL+ "/Patient";
  public REFUND = this.SERVER_URL+ "/Refund";
  public CONTRACT = this.SERVER_URL+ "/Contract";
  public TAX = this.SERVER_URL+ "/Tax";
  public SUBSCRIPTION = this.SERVER_URL+ "/Subscription";
  public REPORT = this.SERVER_URL+ "/Report";
  public SUPPLIER = this.SERVER_URL+ "/Supplier"; 
  public SYSTEM_CONFIG = this.SERVER_URL+ "/SystemConfig";
  public INVESTOR = this.SERVER_URL+ "/Investor";
  public RELEASE = this.SERVER_URL+ "/Release";
  public SECRET = this.SERVER_URL+ "/Secret";
  public USAGE = this.SERVER_URL+ "/Usage";
  public API = this.SERVER_URL+ "/Api";
  public GYM_TRAINER = this.SERVER_URL+ "/GymTrainer";
  public JOB = this.SERVER_URL+ "/Job";
  public CITY = this.SERVER_URL+ "/City";
  public JASPERREPORT = this.SERVER_URL+ "/Jasper";
 
}