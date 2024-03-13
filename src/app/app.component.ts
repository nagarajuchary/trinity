import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExaminationsComponent } from './examinations/examinations.component';
import { HomeComponent } from './home/home.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { FounderComponent } from './founder/founder.component';
import { ChairmanComponent } from './chairman/chairman.component';
import { PrincipalComponent } from './principal/principal.component';
import { DirectoracademicsComponent } from './directoracademics/directoracademics.component';
import { AdministrativeofficerComponent } from './administrativeofficer/administrativeofficer.component';
import { VisionandmissionComponent } from './visionandmission/visionandmission.component';
import { CourseofferedComponent } from './courseoffered/courseoffered.component';
import { AcademiccalendersComponent } from './academiccalenders/academiccalenders.component';
import { AcademicregulationsComponent } from './academicregulations/academicregulations.component';
import { EEEComponent } from './eee/eee.component';
import { ECEComponent } from './ece/ece.component';
import { CSEComponent } from './cse/cse.component';
import { ALMLComponent } from './alml/alml.component';
import { HSComponent } from './hs/hs.component';
import { MBAComponent } from './mba/mba.component';
import { DEEEComponent } from './deee/deee.component';
import { DECEComponent } from './dece/dece.component';
import { DCSEComponent } from './dcse/dcse.component';
import { PlacementsectionComponent } from './placementsection/placementsection.component';
import { ContacttpoComponent } from './contacttpo/contacttpo.component';
import { Criteria1Component } from './criteria1/criteria1.component';
import { Criteria2Component } from './criteria2/criteria2.component';
import { Criteria3Component } from './criteria3/criteria3.component';
import { Criteria4Component } from './criteria4/criteria4.component';
import { Criteria5Component } from './criteria5/criteria5.component';
import { Criteria6Component } from './criteria6/criteria6.component';
import { Criteria7Component } from './criteria7/criteria7.component';
import { IiqaComponent } from './iiqa/iiqa.component';
import { Dcriteria1Component } from './dcriteria1/dcriteria1.component';
import { Dcriteria2Component } from './dcriteria2/dcriteria2.component';
import { Dcriteria3Component } from './dcriteria3/dcriteria3.component';
import { Dcriteria4Component } from './dcriteria4/dcriteria4.component';
import { Dcriteria5Component } from './dcriteria5/dcriteria5.component';
import { Dcriteria6Component } from './dcriteria6/dcriteria6.component';
import { Dcriteria7Component } from './dcriteria7/dcriteria7.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, ExaminationsComponent, HomeComponent, NoticeboardComponent, TimetableComponent, AdmissionsComponent, GallaryComponent, ContactComponent, FounderComponent, ChairmanComponent, PrincipalComponent, DirectoracademicsComponent, AdministrativeofficerComponent, VisionandmissionComponent, CourseofferedComponent, AcademiccalendersComponent, AcademicregulationsComponent, EEEComponent, ECEComponent, CSEComponent, ALMLComponent, HSComponent, MBAComponent, DEEEComponent, DECEComponent, DCSEComponent, PlacementsectionComponent, ContacttpoComponent, Criteria1Component, Criteria2Component, Criteria3Component, Criteria4Component, Criteria5Component, Criteria6Component, Criteria7Component, IiqaComponent, Dcriteria1Component, Dcriteria2Component, Dcriteria3Component, Dcriteria4Component, Dcriteria5Component, Dcriteria6Component, Dcriteria7Component, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trinity';
}
