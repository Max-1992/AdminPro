// Native Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { PagesRoutingModule } from './pages-routing.module';

// Custom Modules
import { ShearedModule } from '../shared/shared.module';

// Camponents
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile/profile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    GraficasComponent,
    ProgressComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShearedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
