import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Outbox2Page } from './outbox2.page';

const routes: Routes = [
  {
    path: '',
    component: Outbox2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Outbox2PageRoutingModule {}
