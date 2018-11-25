import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page/admin-page.component';
import { AdminPageRouterModule } from './admin-page-router.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRouterModule,
    SharedModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminPageModule { }
