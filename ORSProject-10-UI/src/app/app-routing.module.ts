import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashbord/dashboard.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './login/singup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { DecorationlistComponent } from './decoration/decorationlist.component';
import { DecorationComponent } from './decoration/decoration.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentlistComponent } from './appointment/appointmentlist.component';
import { InternetpackageComponent } from './internetpackage/internetpackage.component';
import { InternetpacckagelistComponent } from './internetpackage/internetpacckagelist.component';
import { PatientComponent } from './patient/patient.component';
import { PatientlistComponent } from './patient/patientlist.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },

  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {

    path: 'role',
    component: RoleComponent
  },

  {
    path: 'role/:id',
    component: RoleComponent
  },

  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },

  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },

  {
    path: 'course',
    component: CourseComponent
  },

  {
    path: 'course/:id',
    component: CourseComponent
  },

  {
    path: 'subject',
    component: SubjectComponent
  },

  {
    path: 'subject/:id',
    component: SubjectComponent
  },

  {
    path: 'timetable',
    component: TimetableComponent
  },

  {
    path: 'timetable/:id',
    component: TimetableComponent
  },

  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },

  {
    path: 'rolelist',
    component: RoleListComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },

  {
    path: 'collegelist',
    component: CollegeListComponent
  },

  {
    path: 'studentlist',
    component: StudentListComponent
  },



  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },

  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritlistComponent
  },
  {
    path: 'getmarksheet',
    component: GetmarksheetComponent
  },

  {
    path: 'courselist',
    component: CourseListComponent
  },

  {
    path: 'facultylist',
    component: FacultyListComponent
  },

  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },

  {
    path: 'courselist',
    component: CourseListComponent
  },

  {
    path: 'subjectlist',
    component: SubjectListComponent
  },

  {
    path: 'timetablelist',
    component: TimetableListComponent
  },

  {
    path: 'facultylist',
    component: FacultyListComponent
  },

  {
    path: 'decoration',
    component: DecorationComponent
  },
  {
    path: 'decorationlist',
    component: DecorationlistComponent
  },

  {
    path: 'decoration/:id',
    component: DecorationComponent
  },

  {
    path: 'decoration',
    component: DecorationComponent
  },
  {
    path: 'decorationlist',
    component: DecorationlistComponent
  },

  {
    path: 'decoration/:id',
    component: DecorationComponent
  },

  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'appointmentlist',
    component: AppointmentlistComponent
  },

  {
    path: 'appointment/:id',
    component: AppointmentComponent
  },
  {
    path: 'internetpackage',
    component: InternetpackageComponent
  },
  {
    path: 'internetpackagelist',
    component: InternetpacckagelistComponent
  },
  {
    path: 'internetpackage/:id',
    component: InternetpackageComponent
  },

  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'patientlist',
    component: PatientlistComponent
  },
  {
    path: 'patient/:id',
    component: PatientComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
