import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta5PageRoutingModule } from './pergunta5-routing.module';

import { Pergunta5Page } from './pergunta5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta5PageRoutingModule
  ],
  declarations: [Pergunta5Page]
})
export class Pergunta5PageModule {}
