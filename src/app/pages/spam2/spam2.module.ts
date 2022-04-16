import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Spam2PageRoutingModule } from './spam2-routing.module';

import { Spam2Page } from './spam2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Spam2PageRoutingModule
  ],
  declarations: [Spam2Page]
})
export class Spam2PageModule {}
