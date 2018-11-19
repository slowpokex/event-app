import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared';
import { AppStoreModule } from '@app/core/store';
import { AppFirebaseModule } from '@app/core/firebase';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';

import {
  rollbarFactory,
  RollbarErrorHandler,
  RollbarService
} from '@app/core/services';
import { AdminPageModule, MainPageModule, LoginPageModule } from '@app/pages';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppFirebaseModule,
    AppStoreModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    // app pages
    AdminPageModule,
    MainPageModule,
    LoginPageModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
