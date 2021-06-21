import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  {
  path: 'about-me',
  component: AboutMeComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
  path: 'contact-me',
  component: ContactMeComponent
  },
  {
  path: 'portfolio',
  component: PortfolioComponent
  },
  {
  path: '**',
  component: AboutMeComponent
  }
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
