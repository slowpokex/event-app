import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared';
import { EditPageComponent } from './page/edit-page.component';

@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    EditPageComponent
  ]
})
export class EditPageModule { }
