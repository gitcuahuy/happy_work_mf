import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HpShareModule} from "../../../hp-share/src/lib/hp-share.module";
import {metaReducers, ROOT_REDUCERS} from "../../../hp-share/src/lib/app-state/reducer/index.reducer";
import {StoreModule} from "@ngrx/store";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";

// export function initializeApp(mfService: MicrofrontendService): () => Promise<void> {
//   return () => mfService.initialise();
// }

const APP_ROUTES: Routes = [
  // {
  //   path: 'mailbox',
  //   loadChildren: () => import('mailbox/MailboxModule').then(m => m.MailboxModule)
  // },
  {
    path: 'calendar',
    loadChildren: () => import('calendar/CalendarModule').then(m => m.CalendarModule)
  },
  {
    path: 'iam',
    loadChildren: () => import('iam/IamModule').then(m => m.IamModule) // lưu ý lấy tên module từ file types.d.ts
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HpShareModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    // StoreDevtoolsModule.instrument({
    //   name: 'NgRx example',
    //   // In a production build you would want to disable the Store Devtools
    //   // logOnly: environment.production,
    // }),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'NgRx example', maxAge: 25, logOnly: environment.production}),
  ],
  providers: [
    // MicrofrontendService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp,
    //   multi: true,
    //   deps: [MicrofrontendService],
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
