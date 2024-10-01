import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
// import { DashboardComponent } from './department/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
