import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta4Page } from './pergunta4.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta4PageRoutingModule {}
