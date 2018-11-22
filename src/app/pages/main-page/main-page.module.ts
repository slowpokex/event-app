import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { MainPageComponent } from './page/main-page.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
