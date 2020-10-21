import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspanhaPageRoutingModule } from './espanha-routing.module';

import { EspanhaPage } from './espanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspanhaPageRoutingModule
  ],
  declarations: [EspanhaPage]
})
export class EspanhaPageModule {}
