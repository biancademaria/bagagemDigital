import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta6PageRoutingModule } from './pergunta6-routing.module';

import { Pergunta6Page } from './pergunta6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta6PageRoutingModule
  ],
  declarations: [Pergunta6Page]
})
export class Pergunta6PageModule {}
