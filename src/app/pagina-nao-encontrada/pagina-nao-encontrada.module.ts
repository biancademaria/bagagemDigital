import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaNaoEncontradaPageRoutingModule } from './pagina-nao-encontrada-routing.module';

import { PaginaNaoEncontradaPage } from './pagina-nao-encontrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaNaoEncontradaPageRoutingModule
  ],
  declarations: [PaginaNaoEncontradaPage]
})
export class PaginaNaoEncontradaPageModule {}
