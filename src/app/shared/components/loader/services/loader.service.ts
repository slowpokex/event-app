import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private loaderState = new BehaviorSubject(false);

  public showLoader() {
      this.loaderState.next(true);
  }

  public hideLoader() {
      this.loaderState.next(false);
  }

  public getLoaderState(): BehaviorSubject<boolean> {
      return this.loaderState;
  }
}
