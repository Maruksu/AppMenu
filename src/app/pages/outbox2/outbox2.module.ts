import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Outbox2PageRoutingModule } from './outbox2-routing.module';

import { Outbox2Page } from './outbox2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Outbox2PageRoutingModule
  ],
  declarations: [Outbox2Page]
})
export class Outbox2PageModule {}
