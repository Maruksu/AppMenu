import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Inbox2Page } from './inbox2.page';

const routes: Routes = [
  {
    path: '',
    component: Inbox2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Inbox2PageRoutingModule {}
