import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { routes } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [DefaultComponent]
})
export class DashboardModule { }
