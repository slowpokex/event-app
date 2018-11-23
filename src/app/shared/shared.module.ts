import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HeaderComponent,
  FooterComponent,
  EventCardComponent,
  AddButtonComponent,
  LoaderComponent,
} from './components';
import { TimestampPipe } from './pipes';
import { RouterModule } from '@angular/router';
import { LoaderService } from './components/loader/services/loader.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EventCardComponent,
    AddButtonComponent,
    TimestampPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EventCardComponent,
    TimestampPipe,
    AddButtonComponent,
    LoaderComponent,

    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoaderService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoaderService
      ]
    };
  }
}
