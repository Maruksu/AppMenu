import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Favorites2Page } from './favorites2.page';

const routes: Routes = [
  {
    path: '',
    component: Favorites2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Favorites2PageRoutingModule {}
