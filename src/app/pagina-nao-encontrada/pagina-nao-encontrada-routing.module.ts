import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaPage } from './pagina-nao-encontrada.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaNaoEncontradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaNaoEncontradaPageRoutingModule {}
