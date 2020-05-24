// Native Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Modules
import { ShearedModule } from './sheared/sheared.module';

// Camponents
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { ResetComponent } from './auth/reset/reset.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShearedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
