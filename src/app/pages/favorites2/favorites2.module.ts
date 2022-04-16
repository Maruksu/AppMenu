import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Favorites2PageRoutingModule } from './favorites2-routing.module';

import { Favorites2Page } from './favorites2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Favorites2PageRoutingModule
  ],
  declarations: [Favorites2Page]
})
export class Favorites2PageModule {}
