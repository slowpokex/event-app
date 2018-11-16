import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '../components/main-page/main-page.component';

const ROUTES: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
