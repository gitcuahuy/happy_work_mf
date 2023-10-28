import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShareBigcityComponent } from '@bigcity/share-bigcity';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ShareBigcityComponent],
  selector: 'bigcity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bigcity';
}
