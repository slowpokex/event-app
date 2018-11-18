import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';

import { AppFirebaseModule } from '@app/core/firebase';
import { reducers, metaReducers } from './reducers';
import { ModelEffects, EventEffects } from './effects';

@NgModule({
  imports: [
    AppFirebaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ModelEffects,
      EventEffects
    ]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}
