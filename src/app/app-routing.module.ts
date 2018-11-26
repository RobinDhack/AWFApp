import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren:'./login/login.module#LoginPageModule'},
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'comments', loadChildren: './comments/comments.module#CommentsPageModule' },
  { path: 'festival', loadChildren: './festival/festival.module#FestivalPageModule' },
  { path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersPageModule' },
  { path: 'tips', loadChildren: './tips/tips.module#TipsPageModule' },
  { path: 'mobileConcours', loadChildren: './mobile-concours/mobile-concours.module#MobileConcoursPageModule' },
  { path: 'reglement', loadChildren: './reglement/reglement.module#ReglementPageModule' },
  { path: 'inscriptionMobile', loadChildren: './inscription-mobile/inscription-mobile.module#InscriptionMobilePageModule' },
  { path: 'formulaireMobile', loadChildren: './formulaire-mobile/formulaire-mobile.module#FormulaireMobilePageModule' },
  { path: 'webCourse', loadChildren: './web-course/web-course.module#WebCoursePageModule' },
  { path: 'comCourse', loadChildren: './com-course/com-course.module#ComCoursePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
