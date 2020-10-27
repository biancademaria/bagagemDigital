import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasPage } from './perguntas.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasPage
  },
  {
    path: 'pergunta1',
    loadChildren: () => import('./pergunta1/pergunta1.module').then( m => m.Pergunta1PageModule)
  },
  {
    path: 'pergunta2',
    loadChildren: () => import('./pergunta2/pergunta2.module').then( m => m.Pergunta2PageModule)
  },
  {
    path: 'pergunta3',
    loadChildren: () => import('./pergunta3/pergunta3.module').then( m => m.Pergunta3PageModule)
  },
  {
    path: 'pergunta4',
    loadChildren: () => import('./pergunta4/pergunta4.module').then( m => m.Pergunta4PageModule)
  },
  {
    path: 'pergunta5',
    loadChildren: () => import('./pergunta5/pergunta5.module').then( m => m.Pergunta5PageModule)
  },
  {
    path: 'pergunta6',
    loadChildren: () => import('./pergunta6/pergunta6.module').then( m => m.Pergunta6PageModule)
  },
  {
    path: 'pergunta7',
    loadChildren: () => import('./pergunta7/pergunta7.module').then( m => m.Pergunta7PageModule)
  },
  {
    path: 'pergunta8',
    loadChildren: () => import('./pergunta8/pergunta8.module').then( m => m.Pergunta8PageModule)
  },
  {
    path: 'pergunta9',
    loadChildren: () => import('./pergunta9/pergunta9.module').then( m => m.Pergunta9PageModule)
  },
  {
    path: 'pergunta10',
    loadChildren: () => import('./pergunta10/pergunta10.module').then( m => m.Pergunta10PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasPageRoutingModule {}
