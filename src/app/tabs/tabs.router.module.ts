import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ContactPage } from '../contact/contact.page';
import { TipsPage } from '../tips/tips.page';
import { NewsPage } from '../news/news.page';
import { ProgrammePage} from '../programme/programme.page';
import { GamePage } from '../game/game.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'news',
        outlet: 'news',
        component: NewsPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path:'tips',
        outlet: 'tips',
        component: TipsPage
      },
      {
        path: 'programme',
        outlet: 'programme',
        component: ProgrammePage
      },
      {
        path: 'game',
        outlet:'game',
        component: GamePage
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
