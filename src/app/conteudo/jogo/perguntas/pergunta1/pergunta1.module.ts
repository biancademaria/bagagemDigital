import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta1PageRoutingModule } from './pergunta1-routing.module';

import { Pergunta1Page } from './pergunta1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta1PageRoutingModule
  ],
  declarations: [Pergunta1Page]
})
export class Pergunta1PageModule {}
