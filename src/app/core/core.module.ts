import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStoreModule } from './store';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppStoreModule
  ],
  exports: [
    AppStoreModule
  ]
})
export class CoreModule { }
