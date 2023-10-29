import { Component } from '@angular/core';
import { AuthService } from '@bigcity/shared-common';

@Component({
  selector: 'bigcity-shop-entry',
  template: `<bigcity-nx-welcome></bigcity-nx-welcome>`,
})
export class RemoteEntryComponent {

  constructor(private authService: AuthService) {
    authService.count$.subscribe(count => {

      console.log('received',count);
    })

  }

}
