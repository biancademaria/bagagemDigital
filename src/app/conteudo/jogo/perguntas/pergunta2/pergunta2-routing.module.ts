import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta2Page } from './pergunta2.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta2PageRoutingModule {}
