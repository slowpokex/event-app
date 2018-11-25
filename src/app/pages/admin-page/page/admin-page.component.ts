import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/shared/components/loader/services/loader.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
  }

  testLoad() {
    this.loaderService.showLoader();
    setTimeout(() => this.loaderService.hideLoader(), 1000);
  }

}
