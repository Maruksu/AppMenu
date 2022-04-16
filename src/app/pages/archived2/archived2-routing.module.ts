import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Archived2Page } from './archived2.page';

const routes: Routes = [
  {
    path: '',
    component: Archived2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Archived2PageRoutingModule {}
