import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'inbox2',
    loadChildren: () => import('./pages/inbox2/inbox2.module').then( m => m.Inbox2PageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'outbox',
    loadChildren: () => import('./pages/outbox/outbox.module').then( m => m.OutboxPageModule)
  },
  {
    path: 'outbox2',
    loadChildren: () => import('./pages/outbox2/outbox2.module').then( m => m.Outbox2PageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'favorites2',
    loadChildren: () => import('./pages/favorites2/favorites2.module').then( m => m.Favorites2PageModule)
  },
  {
    path: 'archived',
    loadChildren: () => import('./pages/archived/archived.module').then( m => m.ArchivedPageModule)
  },
  {
    path: 'archived2',
    loadChildren: () => import('./pages/archived2/archived2.module').then( m => m.Archived2PageModule)
  },
  {
    path: 'trash',
    loadChildren: () => import('./pages/trash/trash.module').then( m => m.TrashPageModule)
  },
  {
    path: 'trash2',
    loadChildren: () => import('./pages/trash2/trash2.module').then( m => m.Trash2PageModule)
  },
  {
    path: 'spam',
    loadChildren: () => import('./pages/spam/spam.module').then( m => m.SpamPageModule)
  },
  {
    path: 'spam2',
    loadChildren: () => import('./pages/spam2/spam2.module').then( m => m.Spam2PageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pages/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'botao1',
    loadChildren: () => import('./botao1/botao1.module').then( m => m.Botao1PageModule)
  },
  {
    path: 'botao2',
    loadChildren: () => import('./botao2/botao2.module').then( m => m.Botao2PageModule)
  },
  {
    path: 'botao3',
    loadChildren: () => import('./botao3/botao3.module').then( m => m.Botao3PageModule)
  },
  {
    path: 'botao4',
    loadChildren: () => import('./botao4/botao4.module').then( m => m.Botao4PageModule)
  },
  {
    path: 'botao5',
    loadChildren: () => import('./botao5/botao5.module').then( m => m.Botao5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
