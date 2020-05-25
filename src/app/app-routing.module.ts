// Native Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Components
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule )
  },
  {
     path: '', 
     pathMatch: 'full', 
     redirectTo: 'panel' 
  },
  { path: '**', 
    component: NotfoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
