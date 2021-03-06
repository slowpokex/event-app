import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent, EditPageComponent } from '@app/pages';

const ROUTES: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'edit', component: EditPageComponent },
  { path: 'admin', loadChildren: './pages/admin-page/admin-page.module#AdminPageModule' },
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
