import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routing";
import { UiModule } from "./ui/ui.module";
import { CommonLayoutComponent } from './ui/common-layout/common-layout.component';
import { CommonHeaderComponent } from './ui/common-header/common-header.component';
import { CommonFooterComponent } from './ui/common-footer/common-footer.component';
import { AuthLayoutComponent } from './ui/auth-layout/auth-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),

    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
