import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader/services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loaderService: LoaderService
  ) {
  }

  ngOnInit() {
  }

  testLoad() {
    this.loaderService.showLoader();
    setTimeout(() => this.loaderService.hideLoader(), 1000);
  }

}
