import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'iam',
    pathMatch: 'full'
  },
  {
    path: 'iam',
    loadChildren: () => import('./iam/iam.module').then(m => m.IamModule),
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
