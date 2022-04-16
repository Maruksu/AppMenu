import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Archived2PageRoutingModule } from './archived2-routing.module';

import { Archived2Page } from './archived2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Archived2PageRoutingModule
  ],
  declarations: [Archived2Page]
})
export class Archived2PageModule {}
