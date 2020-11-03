import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },
  {
    path: 'canada',
    loadChildren: () => import('./conteudo/canada/canada.module').then( m => m.CanadaPageModule)
  },
  {
    path: 'japao',
    loadChildren: () => import('./conteudo/japao/japao.module').then( m => m.JapaoPageModule)
  },
  {
    path: 'israel',
    loadChildren: () => import('./conteudo/israel/israel.module').then( m => m.IsraelPageModule)
  },
  {
    path: 'espanha',
    loadChildren: () => import('./conteudo/espanha/espanha.module').then( m => m.EspanhaPageModule)
  },
  {
    path: 'artigo',
    loadChildren: () => import('./conteudo/artigo/artigo.module').then( m => m.ArtigoPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./conteudo/jogo/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./paginas/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./paginas/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./conteudo/jogo/perguntas/perguntas.module').then( m => m.PerguntasPageModule)
  },
  {
    path: 'pagina-nao-encontrada',
    loadChildren: () => import('./pagina-nao-encontrada/pagina-nao-encontrada.module').then( m => m.PaginaNaoEncontradaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
