import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Spam2Page } from './spam2.page';

const routes: Routes = [
  {
    path: '',
    component: Spam2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Spam2PageRoutingModule {}
