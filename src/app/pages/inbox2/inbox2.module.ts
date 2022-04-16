import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Inbox2PageRoutingModule } from './inbox2-routing.module';

import { Inbox2Page } from './inbox2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Inbox2PageRoutingModule
  ],
  declarations: [Inbox2Page]
})
export class Inbox2PageModule {}
