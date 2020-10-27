import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta9Page } from './pergunta9.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta9PageRoutingModule {}
