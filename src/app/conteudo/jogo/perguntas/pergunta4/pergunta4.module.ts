import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta4PageRoutingModule } from './pergunta4-routing.module';

import { Pergunta4Page } from './pergunta4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta4PageRoutingModule
  ],
  declarations: [Pergunta4Page]
})
export class Pergunta4PageModule {}
