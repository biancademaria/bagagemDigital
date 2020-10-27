import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta10Page } from './pergunta10.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta10PageRoutingModule {}
