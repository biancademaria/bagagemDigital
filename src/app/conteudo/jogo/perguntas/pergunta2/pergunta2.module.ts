import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta2PageRoutingModule } from './pergunta2-routing.module';

import { Pergunta2Page } from './pergunta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta2PageRoutingModule
  ],
  declarations: [Pergunta2Page]
})
export class Pergunta2PageModule {}
