import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta1Page } from './pergunta1.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta1PageRoutingModule {}
