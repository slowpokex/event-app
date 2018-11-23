import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public isDisplayed: BehaviorSubject<boolean>;

  constructor(
    public loaderService: LoaderService
  ) {
    this.isDisplayed = this.loaderService.getLoaderState();
  }

  ngOnInit() {
  }

}
