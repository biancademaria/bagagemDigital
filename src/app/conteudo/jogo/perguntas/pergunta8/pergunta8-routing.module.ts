import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta8Page } from './pergunta8.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta8PageRoutingModule {}
