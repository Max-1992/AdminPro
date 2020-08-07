// Native Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Panel Administrativo' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
      { path: 'graficas', component: GraficasComponent, data: { title: 'Graficas' } },
      { path: 'account', component: AccountSettingsComponent, data: { title: 'Ajustes del tema' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' } },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


