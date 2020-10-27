import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta5Page } from './pergunta5.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta5PageRoutingModule {}
