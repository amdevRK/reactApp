import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';


@NgModule({
  imports: [
    CommonModule,

  ],
  // declarations: [ CommonLayoutComponent, AuthLayoutComponent, CommonHeaderComponent, CommonFooterComponent]
})
export class UiModule { }
