import { Component } from '@angular/core';
import { AuthService } from '@bigcity/shared-common';

@Component({
  selector: 'bigcity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor(private authService: AuthService) {
    let i = 0
    setInterval(() => {
      i++;
      authService.count$.next(i)
      console.log('next ', i);

    }, 2000);
  }
}
