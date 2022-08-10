import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'experiencedetails', component: ExperienceDetailsComponent },
      // { path: 'achievementdetails', component: AchievementDetailsComponent },
      // { path: 'certificationdetails', component: CertificationDetailsComponent },
      // { path: 'educationdetails', component: EducationDetailsComponent },
      // { path: 'skilldetails', component: SkillDetailsComponent },
      // { path: 'downloadresume', component: DownloadResumeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
