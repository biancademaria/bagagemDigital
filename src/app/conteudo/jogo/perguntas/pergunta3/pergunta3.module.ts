import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta3PageRoutingModule } from './pergunta3-routing.module';

import { Pergunta3Page } from './pergunta3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta3PageRoutingModule
  ],
  declarations: [Pergunta3Page]
})
export class Pergunta3PageModule {}
