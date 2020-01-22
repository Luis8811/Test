import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuuestionPageRoutingModule } from './quuestion-routing.module';

import { QuuestionPage } from './quuestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuuestionPageRoutingModule
  ],
  declarations: [QuuestionPage]
})
export class QuuestionPageModule {}
