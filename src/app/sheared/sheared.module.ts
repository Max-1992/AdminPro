// Native Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent]
})
export class ShearedModule { }
