import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JapaoPage } from './japao.page';

const routes: Routes = [
  {
    path: '',
    component: JapaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JapaoPageRoutingModule {}
