// Native Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ng2-charts Module
import { ChartsModule } from 'ng2-charts';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { ChartppieChartDataieComponent } from './components/chartpie/chartpie.component';






@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent, IncrementadorComponent, ChartppieChartDataieComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule
  ],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent, IncrementadorComponent, ChartppieChartDataieComponent]
})
export class ShearedModule { }
