import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta10PageRoutingModule } from './pergunta10-routing.module';

import { Pergunta10Page } from './pergunta10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta10PageRoutingModule
  ],
  declarations: [Pergunta10Page]
})
export class Pergunta10PageModule {}
