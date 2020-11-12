import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import("./pages/supervisor/supervisor.module").then( m => m.SupervisorPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'alta-admins',
    loadChildren: () => import('./pages/alta-admins/alta-admins.module').then( m => m.AltaAdminsPageModule)
  },
  {
    path: 'home/:user',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'listaespera/:user',
    loadChildren: () => import('./pages/lista-espera/lista-espera.module').then( m => m.ListaEsperaPageModule)
  },
  {
    path: 'preparacion/:sector',
    loadChildren: () => import('./pages/bartender/bartender.module').then( m => m.BartenderPageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
