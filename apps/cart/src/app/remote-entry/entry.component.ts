import { Component } from '@angular/core';
// import { environment } from "shell/config";

@Component({
  selector: 'bigcity-cart-entry',
  template: `<bigcity-nx-welcome></bigcity-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor() {
    // Trong ứng dụng con

// console.log(environment.apiUrl); // Sử dụng biến môi trường

  }
}
