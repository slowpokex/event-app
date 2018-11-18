import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Will be automatically generated by set-env script
// @ts-ignore
import { environment } from '../environments/environment';

import { MaterialModule } from './material/material.module';
import { AppStoreModule } from './store/app-store.module';
import { AppRoutingModule } from './routing/app-routing.module';

// Services
import { EventsFirebaseService } from './services/events-firebase.service';

// Components
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CoreModule } from './core/core.module';

import {
  rollbarFactory,
  RollbarErrorHandler,
  RollbarService
} from './rollbar/rollbar.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'event-app'),
    AngularFireDatabaseModule,
    AppStoreModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory },
    EventsFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
