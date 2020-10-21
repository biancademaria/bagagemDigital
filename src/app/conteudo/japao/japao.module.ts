import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JapaoPageRoutingModule } from './japao-routing.module';

import { JapaoPage } from './japao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JapaoPageRoutingModule
  ],
  declarations: [JapaoPage]
})
export class JapaoPageModule {}
