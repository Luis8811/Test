import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuuestionPage } from './quuestion.page';

const routes: Routes = [
  {
    path: '',
    component: QuuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuuestionPageRoutingModule {}
