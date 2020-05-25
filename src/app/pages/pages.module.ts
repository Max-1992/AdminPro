// Native Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { PagesRoutingModule } from './pages-routing.module';

// Custom Modules
import { ShearedModule } from '../sheared/sheared.module';

// Camponents
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    GraficasComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShearedModule
  ]
})
export class PagesModule { }
