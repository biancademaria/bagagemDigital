import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtigoPage } from './artigo.page';

const routes: Routes = [
  {
    path: '',
    component: ArtigoPage,
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'pag2',
    loadChildren: () => import('./pag2/pag2.module').then( m => m.Pag2PageModule)
  },
  {
    path: 'pag3',
    loadChildren: () => import('./pag3/pag3.module').then( m => m.Pag3PageModule)
  },
  {
    path: 'pag4',
    loadChildren: () => import('./pag4/pag4.module').then( m => m.Pag4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtigoPageRoutingModule {}
