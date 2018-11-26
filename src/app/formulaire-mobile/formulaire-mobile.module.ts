import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormulaireMobilePage } from './formulaire-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireMobilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormulaireMobilePage]
})
export class FormulaireMobilePageModule {}
