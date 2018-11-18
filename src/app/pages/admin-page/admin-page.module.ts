import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page/admin-page.component';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminPageModule { }
