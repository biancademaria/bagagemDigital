import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta9PageRoutingModule } from './pergunta9-routing.module';

import { Pergunta9Page } from './pergunta9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta9PageRoutingModule
  ],
  declarations: [Pergunta9Page]
})
export class Pergunta9PageModule {}
