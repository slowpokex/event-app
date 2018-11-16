import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ModelEffects } from './model.effects';

describe('ModelEffects', () => {
  let actions$: Observable<any>;
  let effects: ModelEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModelEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ModelEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
