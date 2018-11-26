import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InscriptionMobilePage } from './inscription-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionMobilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InscriptionMobilePage]
})
export class InscriptionMobilePageModule {}
