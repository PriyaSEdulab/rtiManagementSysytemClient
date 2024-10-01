import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from 'src/app/layout/app.layout.component';

const routes : Routes = [
  {
    path : '',
    component:AppLayoutComponent,
    children:[
      {path:'dashboard',component:DashboardComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
