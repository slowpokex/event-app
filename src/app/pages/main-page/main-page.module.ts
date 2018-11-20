import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { MainPageComponent } from './page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
