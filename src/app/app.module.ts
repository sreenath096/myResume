import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { AchievementDetailsComponent } from './achievement-details/achievement-details.component';
import { CertificationDetailsComponent } from './certification-details/certification-details.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { DownloadResumeComponent } from './download-resume/download-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceDetailsComponent,
    AchievementDetailsComponent,
    CertificationDetailsComponent,
    EducationDetailsComponent,
    SkillDetailsComponent,
    DownloadResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
