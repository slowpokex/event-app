import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromModel from './store/reducers';
import * as Model from './store/actions/model.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cool application';
  value$ = this.store.pipe(select(fromModel.getValue));

  constructor(private store: Store<fromModel.State>) {}

  onIncrement(): void {
    this.store.dispatch(new Model.Increment());
  }

  onDecrement(): void {
    this.store.dispatch(new Model.Decrement());
  }
}
