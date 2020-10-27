import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta7Page } from './pergunta7.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta7PageRoutingModule {}
