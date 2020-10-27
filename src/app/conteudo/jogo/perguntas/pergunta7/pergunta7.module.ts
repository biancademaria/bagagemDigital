import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta7PageRoutingModule } from './pergunta7-routing.module';

import { Pergunta7Page } from './pergunta7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta7PageRoutingModule
  ],
  declarations: [Pergunta7Page]
})
export class Pergunta7PageModule {}
