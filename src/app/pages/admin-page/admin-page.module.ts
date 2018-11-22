import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page/admin-page.component';
import { AdminPageRouterModule } from './admin-page-router.module';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRouterModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminPageModule { }
