import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Trash2PageRoutingModule } from './trash2-routing.module';

import { Trash2Page } from './trash2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Trash2PageRoutingModule
  ],
  declarations: [Trash2Page]
})
export class Trash2PageModule {}
