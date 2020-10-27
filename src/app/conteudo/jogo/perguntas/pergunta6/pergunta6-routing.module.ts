import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta6Page } from './pergunta6.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta6PageRoutingModule {}
