import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { EventsFirebaseService } from './events-firebase.service';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'event-app'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
  ],
  providers: [
    EventsFirebaseService
  ],
})
export class AppFirebaseModule { }
