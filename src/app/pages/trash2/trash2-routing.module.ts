import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Trash2Page } from './trash2.page';

const routes: Routes = [
  {
    path: '',
    component: Trash2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Trash2PageRoutingModule {}
