import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Microfrontend } from './microfrontend.model';
import {buildRoutes} from "../utils/router-utils";

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[] = [];

  constructor(private router: Router) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      console.log('Microfrontends: ', this.microfrontends)
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  /*
   * This is just an hardcoded list of remote microfrontends, but could easily be updated
   * to load the config from a database or external file
   */
  loadConfig(): Microfrontend[] {
    return [
      // {
      //   // For Loading
      //   remoteEntry: 'http://localhost:5500/remoteEntry.js',
      //   remoteName: 'iam',
      //   exposedModule: 'IamModule',
      //
      //   // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
      //   displayName: 'iam',
      //   routePath: 'iam',
      //   ngModuleName: 'IamModule',
      // },
    ];
  }
}
