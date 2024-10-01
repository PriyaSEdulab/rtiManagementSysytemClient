import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ButtonModule,
    StyleClassModule,
    TableModule,
    MenuModule,
    FormsModule,
    PanelMenuModule,
    // ChartModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DepartmentModule { }
