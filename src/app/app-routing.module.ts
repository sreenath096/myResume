import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementDetailsComponent } from './achievement-details/achievement-details.component';
import { CertificationDetailsComponent } from './certification-details/certification-details.component';
import { DownloadResumeComponent } from './download-resume/download-resume.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HomeComponent } from './home/home.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'experiencedetails', component: ExperienceDetailsComponent },
      { path: 'achievementdetails', component: AchievementDetailsComponent },
      { path: 'certificationdetails', component: CertificationDetailsComponent },
      { path: 'educationdetails', component: EducationDetailsComponent },
      { path: 'skilldetails', component: SkillDetailsComponent },
      { path: 'downloadresume', component: DownloadResumeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
