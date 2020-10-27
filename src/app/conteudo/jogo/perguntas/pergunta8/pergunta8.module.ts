import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta8PageRoutingModule } from './pergunta8-routing.module';

import { Pergunta8Page } from './pergunta8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta8PageRoutingModule
  ],
  declarations: [Pergunta8Page]
})
export class Pergunta8PageModule {}
