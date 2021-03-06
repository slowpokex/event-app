import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '@env/environment';

import { AppFirebaseModule } from '@app/core/firebase';
import { reducers, metaReducers } from './reducers';
import { EventEffects } from './effects';

@NgModule({
  imports: [
    AppFirebaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      EventEffects
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}
