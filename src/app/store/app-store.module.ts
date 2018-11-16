import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { reducers, metaReducers } from './reducers';
import { ModelEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ModelEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}
